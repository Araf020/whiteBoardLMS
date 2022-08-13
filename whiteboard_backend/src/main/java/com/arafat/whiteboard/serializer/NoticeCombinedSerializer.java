package com.arafat.whiteboard.serializer;


import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.boot.jackson.*;

import com.arafat.whiteboard.model.CourseNotice;
import com.arafat.whiteboard.model.Course;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.TreeNode;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.node.TextNode;

@JsonComponent
public class NoticeCombinedSerializer {
 
    public static class AssignmentsJsonSerializer 
      extends JsonSerializer<CourseNotice> {

        @Override
        public void serialize(CourseNotice notice, JsonGenerator jsonGenerator, 
          SerializerProvider serializerProvider) throws IOException, 
          JsonProcessingException {

            String id = notice.getNoticeId()+"";
            String deadline = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(notice.getDate());

            jsonGenerator.writeStartObject();
            jsonGenerator.writeStringField("noticeId", id);
            jsonGenerator.writeStringField(
              "title", notice.getTitle());
            jsonGenerator.writeStringField(
                "description", notice.getDescription());
            jsonGenerator.writeStringField(
                "date", deadline);
            jsonGenerator.writeStringField(
                "fileLink", notice.getFileLink());
            
            // jsonGenerator.writeStringField("courseName", notice.getCourse().getCourseTitle()+"");
            jsonGenerator.writeStringField("courseId", notice.getCourse().getcourseId()+"");
            // jsonGenerator.writeStringField("specLink", notice.getSpec());
            
            jsonGenerator.writeEndObject();
        }

        
    }

    public static class PostJsonDeserializer 
      extends JsonDeserializer<CourseNotice> {

        
        /* (non-Javadoc)
         * @see com.fasterxml.jackson.databind.JsonDeserializer#deserialize(com.fasterxml.jackson.core.JsonParser, com.fasterxml.jackson.databind.DeserializationContext)
         */
        @Override
        public CourseNotice deserialize(JsonParser jsonParser, 
          DeserializationContext deserializationContext)
          throws IOException, JsonProcessingException {
 
            TreeNode treeNode = jsonParser.getCodec().readTree(jsonParser);


            // check if the node is null or not 
            if (treeNode == null) {
                return null;
            }
            // check if the node is a text node or not
            

            String title = ((TextNode) treeNode.get("title")) != null ? 
              ((TextNode) treeNode.get("title")).asText() : null;
            
            String desc = ((TextNode) treeNode.get("description")) != null ? 
              ((TextNode) treeNode.get("description")).asText() : null;
            
            // deadline must be in the format of yyyy-MM-dd HH:mm:ss
            String date = ((TextNode) treeNode.get("date")) != null ? 
              ((TextNode) treeNode.get("date")).asText() : null;
            
              String fileLink = ((TextNode) treeNode.get("fileLink")) != null ? 
              ((TextNode) treeNode.get("fileLink")).asText() : null;
            
            // String courseName = ((TextNode) treeNode.get("courseName")).asText();
            String courseID= ((TextNode) treeNode.get("courseId")) != null ? 
              ((TextNode) treeNode.get("courseId")).asText() : null;
            
            
            
            
              Long courseId = null;
            
              try {
                courseId = Long.parseLong(courseID);
              } catch (Exception e) {
                //TODO: handle exception
                System.out.println("courseid is null: "+e);
                courseId = 0L;
              }
           
           
            Date dueDate = new Date();
            
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            // convert string date to type Date
            try {
              dueDate = sdf.parse(date);
            } catch (Exception e) {
              //      : handle exception
              System.out.println("Exception: " + e);
            }

            return new CourseNotice()
            .setTitle(title)
            .setDescription(desc)
            .setDate(dueDate)
            .setFileLink(fileLink)
            .setCourse(new Course().setCourseId(courseId))
            
            ;
        }
    }
}


