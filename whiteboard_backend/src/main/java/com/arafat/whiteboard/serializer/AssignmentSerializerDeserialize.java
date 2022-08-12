package com.arafat.whiteboard.serializer;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.boot.jackson.*;

import com.arafat.whiteboard.model.Assignments;
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
public class AssignmentSerializerDeserialize {
 
    public static class AssignmentsJsonSerializer 
      extends JsonSerializer<Assignments> {

        @Override
        public void serialize(Assignments assignment, JsonGenerator jsonGenerator, 
          SerializerProvider serializerProvider) throws IOException, 
          JsonProcessingException {

            String id = assignment.getassignmentId()+"";
            String deadline = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(assignment.getAssignmentDueDate());

            jsonGenerator.writeStartObject();
            jsonGenerator.writeStringField("assignmentId", id);
            jsonGenerator.writeStringField(
              "title", assignment.getAssTitle());
            jsonGenerator.writeStringField(
                "description", assignment.getDescription());
            jsonGenerator.writeStringField(
                "deadline", deadline);
            
            // jsonGenerator.writeStringField("courseName", assignment.getCourse().getCourseTitle()+"");
            jsonGenerator.writeStringField("courseId", assignment.getCourse().getcourseId()+"");
            jsonGenerator.writeStringField("specLink", assignment.getSpec());
            
            jsonGenerator.writeEndObject();
        }

        
    }

    public static class PostJsonDeserializer 
      extends JsonDeserializer<Assignments> {

        
        /* (non-Javadoc)
         * @see com.fasterxml.jackson.databind.JsonDeserializer#deserialize(com.fasterxml.jackson.core.JsonParser, com.fasterxml.jackson.databind.DeserializationContext)
         */
        @Override
        public Assignments deserialize(JsonParser jsonParser, 
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
            String date = ((TextNode) treeNode.get("deadline")) != null ? 
              ((TextNode) treeNode.get("deadline")).asText() : null;
            
            // String courseName = ((TextNode) treeNode.get("courseName")).asText();
            String courseID= ((TextNode) treeNode.get("courseId")) != null ? 
              ((TextNode) treeNode.get("courseId")).asText() : null;
            
            
            String specLink= ((TextNode) treeNode.get("specLink")) != null ? 
              ((TextNode) treeNode.get("specLink")).asText() : null;
            
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

            return new Assignments()
            .setAssTitle(title)
            .setDescription(desc)
            .setAssignmentDueDate(dueDate)
            .setSpec(specLink)
            .setCourse(new Course().setCourseId(courseId))
            
            ;
        }
    }
}
