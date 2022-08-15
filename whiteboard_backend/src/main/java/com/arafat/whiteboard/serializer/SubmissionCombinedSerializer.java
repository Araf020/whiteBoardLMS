package com.arafat.whiteboard.serializer;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.boot.jackson.*;

import com.arafat.whiteboard.model.Assignments;
import com.arafat.whiteboard.model.Course;
import com.arafat.whiteboard.model.SchoolStudents;
import com.arafat.whiteboard.model.Submission;
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
public class SubmissionCombinedSerializer {
 
    public static class SubmissionsJsonSerializer 
      extends JsonSerializer<Submission> {

        @Override
        public void serialize(Submission submission, JsonGenerator jsonGenerator, 
          SerializerProvider serializerProvider) throws IOException, 
          JsonProcessingException {

            String id = submission.getsubmissionId()+"";
            String deadline = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(submission.getDeadline());
            String submitTime = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(submission.getSubmissionTime());

            jsonGenerator.writeStartObject();
            jsonGenerator.writeStringField("submissionId", id);
            jsonGenerator.writeStringField(
              "gradingStatus", submission.getGrading_status());
            jsonGenerator.writeStringField(
                "subFile", submission.getSub_file_link());
            jsonGenerator.writeStringField(
                "deadline", deadline);
            jsonGenerator.writeStringField(
                "submissionTime", submitTime);
           
            
            // jsonGenerator.writeStringField("courseName", submission.getCourse().getCourseTitle()+"");
            jsonGenerator.writeStringField("assignmentId", submission.getAssignment().getassignmentId()+"");
            jsonGenerator.writeStringField("studentId", submission.getStudent().get_id()+"");
            
            jsonGenerator.writeEndObject();
        }

        
    }

    public static class SubmissionJsonDeserializer 
      extends JsonDeserializer<Submission> {

        
        /* (non-Javadoc)
         * @see com.fasterxml.jackson.databind.JsonDeserializer#deserialize(com.fasterxml.jackson.core.JsonParser, com.fasterxml.jackson.databind.DeserializationContext)
         */
        @Override
        public Submission deserialize(JsonParser jsonParser, 
          DeserializationContext deserializationContext)
          throws IOException, JsonProcessingException {
 
            TreeNode treeNode = jsonParser.getCodec().readTree(jsonParser);


            // check if the node is null or not 
            if (treeNode == null) {
                return null;
            }
            // check if the node is a text node or not
            

            String subFile = ((TextNode) treeNode.get("subFile")) != null ? 
              ((TextNode) treeNode.get("subFile")).asText() : null;
            
           
            
            // deadline must be in the format of yyyy-MM-dd HH:mm:ss
            String deaddate = ((TextNode) treeNode.get("deadline")) != null ? 
              ((TextNode) treeNode.get("deadline")).asText() : null;
            String subDate = ((TextNode) treeNode.get("submissionTime")) != null ? 
              ((TextNode) treeNode.get("submissionTime")).asText() : null;
            String graded = ((TextNode) treeNode.get("gradingStatus")) != null ? 
              ((TextNode) treeNode.get("gradingStatus")).asText() : null;
            
            // String courseName = ((TextNode) treeNode.get("courseName")).asText();
            String assID= ((TextNode) treeNode.get("assignmentId")) != null ? 
              ((TextNode) treeNode.get("assignmentId")).asText() : null;
            
            
            String stdId= ((TextNode) treeNode.get("studentId")) != null ? 
              ((TextNode) treeNode.get("studentId")).asText() : null;
            
              Long assingmentId = null;
              Long studentId = null;
              Boolean status = false;
            
              try {
                assingmentId = Long.parseLong(assID);
                studentId = Long.parseLong(stdId);

              } catch (Exception e) {
                //TODO: handle exception
                System.out.println("assid, stdId is null: "+e);
                
              }
           
           
            Date dueDate = new Date();
            Date subtime = new Date();
            
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            // convert string date to type Date
            try {
              dueDate = sdf.parse(deaddate);
                subtime = sdf.parse(subDate);
            } catch (Exception e) {
              //      : handle exception
              System.out.println("Exception: in date parsing " + e);
            }

            Submission submission = new Submission();
            
            submission.setDeadline(dueDate);    
            submission.setSubmissionTime(subtime);
            submission.setGrading_status(graded);
            submission.setSub_file_link(subFile);
            submission.setAssignment(new Assignments().setassignmentId(assingmentId));
            submission.setStudent(new SchoolStudents().set_id(studentId));

            return submission;
            
            
        }
    }
}
