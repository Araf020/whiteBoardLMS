package com.arafat.whiteboard.serializer;



import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.boot.jackson.*;

import com.arafat.whiteboard.model.CourseNotice;
import com.arafat.whiteboard.model.Enrollment;
import com.arafat.whiteboard.model.SchoolStudents;
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
public class EnrollCombinedSerializer {
 
    public static class AssignmentsJsonSerializer 
      extends JsonSerializer<Enrollment> {

        @Override
        public void serialize(Enrollment enroll, JsonGenerator jsonGenerator, 
          SerializerProvider serializerProvider) throws IOException, 
          JsonProcessingException {

        
            String enrollDate = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(enroll.getEnrollDate());


            jsonGenerator.writeStartObject();
            jsonGenerator.writeStringField("status", enroll.getEnrollStatus());
            jsonGenerator.writeBooleanField("isActive", enroll.isActive());
            jsonGenerator.writeStringField("enrollDate",enrollDate);

            jsonGenerator.writeStringField("enrollId", enroll.getEnrollId()+"");
            jsonGenerator.writeStringField("courseId", enroll.getCourse().getcourseId()+"");
            jsonGenerator.writeStringField("studentId", enroll.getStudent().get_id()+"");
            jsonGenerator.writeEndObject();
        }

        
    }

    public static class PostJsonDeserializer 
      extends JsonDeserializer<Enrollment> {

        
        /* (non-Javadoc)
         * @see com.fasterxml.jackson.databind.JsonDeserializer#deserialize(com.fasterxml.jackson.core.JsonParser, com.fasterxml.jackson.databind.DeserializationContext)
         */
        @Override
        public Enrollment deserialize(JsonParser jsonParser, 
          DeserializationContext deserializationContext)
          throws IOException, JsonProcessingException {
 
            TreeNode treeNode = jsonParser.getCodec().readTree(jsonParser);


            // check if the node is null or not 
            if (treeNode == null) {
                return null;
            }
            // check if the node is a text node or not
            

            String status = ((TextNode) treeNode.get("status")) != null ? 
              ((TextNode) treeNode.get("status")).asText() : null;
            
            Boolean isActive = ((TextNode) treeNode.get("isActive")) != null ? 
              ((TextNode) treeNode.get("isActive")).asBoolean() : null;
            
            // deadline must be in the format of yyyy-MM-dd HH:mm:ss
            String date = ((TextNode) treeNode.get("enrollDate")) != null ? 
              ((TextNode) treeNode.get("enrollDate")).asText() : null;
            
            
            
            // String courseName = ((TextNode) treeNode.get("courseName")).asText();
            String courseID= ((TextNode) treeNode.get("courseId")) != null ? 
              ((TextNode) treeNode.get("courseId")).asText() : null;
            String studentID= ((TextNode) treeNode.get("studentId")) != null ? 
              ((TextNode) treeNode.get("studentId")).asText() : null;
            
            
            
            
              Long courseId = null;
              Long studentId = null;
              Boolean active = null;
            
              try {
                courseId = Long.parseLong(courseID);
                studentId = Long.parseLong(studentID);
              } catch (Exception e) {
                //TODO: handle exception
                System.out.println("courseid or studentiID is null: "+e);
                // active = Boolean.parseBoolean(isActive);
                courseId = 0L;
              }
           
           
            Date enrollDate = new Date();
            
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            // convert string date to type Date
            try {
              enrollDate = sdf.parse(date);
            } catch (Exception e) {
              //      : handle exception
              System.out.println("Exception: " + e);
            }
            Enrollment enrollment = new Enrollment();
            
            enrollment
            .setEnrollDate(enrollDate)
            .setEnrollStatus(status)
  
            .setStudent(new SchoolStudents().set_id(studentId))
            .setCourse(new Course().setCourseId(courseId));

            if(isActive != null) {
             
              enrollment.setActive(isActive);
            }

            return enrollment
            
            ;
        }
    }
}



