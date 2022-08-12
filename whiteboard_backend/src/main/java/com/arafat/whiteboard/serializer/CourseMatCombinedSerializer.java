package com.arafat.whiteboard.serializer;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;


import com.arafat.whiteboard.model.CourseMaterials;
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


public class CourseMatCombinedSerializer {
    public static class CourseMaterialsJsonSerializer 
      extends JsonSerializer<CourseMaterials> {

        @Override
        public void serialize(CourseMaterials courseMat, JsonGenerator jsonGenerator, 
          SerializerProvider serializerProvider) throws IOException, 
          JsonProcessingException {

            String id = courseMat.getmaterialId()+"";
            String createdAt = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(courseMat.getCreateTime());

            jsonGenerator.writeStartObject();
            jsonGenerator.writeStringField("title", courseMat.getMaterialTitle());
            jsonGenerator.writeStringField("courseMatId", id);
            jsonGenerator.writeStringField("courseCode", courseMat.getCourse().getCourseCode());
            jsonGenerator.writeStringField("courseId", courseMat.getCourse().getcourseId()+"");
            jsonGenerator.writeStringField("fileUrl", courseMat.getFileLocation());
            jsonGenerator.writeStringField("fileType", courseMat.getFileType());
            jsonGenerator.writeStringField("createdAt", createdAt);

            jsonGenerator.writeEndObject();
        }

        
    }

    public static class PostJsonDeserializer 
      extends JsonDeserializer<CourseMaterials> {

        
        /* (non-Javadoc)
         * @see com.fasterxml.jackson.databind.JsonDeserializer#deserialize(com.fasterxml.jackson.core.JsonParser, com.fasterxml.jackson.databind.DeserializationContext)
         */
        @Override
        public CourseMaterials deserialize(JsonParser jsonParser, 
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
            String courseID= ((TextNode) treeNode.get("courseId")) != null ? ((TextNode) treeNode.get("courseId")).asText() : null;


            String courseCode = ((TextNode) treeNode.get("courseCode")) != null ? 
              ((TextNode) treeNode.get("courseCode")).asText() : null;
            
            String fileUrl = ((TextNode) treeNode.get("fileUrl")) != null ? ((TextNode) treeNode.get("fileUrl")).asText() : null;
            
            // deadline must be in the format of yyyy-MM-dd HH:mm:ss
            String date = ((TextNode) treeNode.get("createdAt")) != null ? ((TextNode) treeNode.get("createdAt")).asText() : null;
            
            // String courseName = ((TextNode) treeNode.get("courseName")).asText();
            
            String fileType= ((TextNode) treeNode.get("fileType")) != null ? ((TextNode) treeNode.get("fileType")).asText() : null;
            
              Long courseId = 0L;

            System.out.println("courseID: " + courseID);
            
              try {
                courseId = Long.parseLong(courseID);
                
              } catch (Exception e) {
                System.out.println("course id: "+e);
                courseId = 0L;
                
              }
              
            
              System.out.println("courseId: " + courseId);
              System.out.println("courseCode: " + courseCode);
           
            Date creation = new Date();
            
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            // convert string date to type Date
            try {
              creation = sdf.parse(date);
            } catch (Exception e) {
              //      : handle exception
              System.out.println("Exception: " + e);
            }

            return new CourseMaterials()
            .setMaterialTitle(title)
            .setFileLocation(fileUrl)
            .setFileType(fileType)
            .setCreateTime(creation)
            .setCourse(new Course().setCourseId(courseId))
            ;
        }
    }
}
    

