package com.arafat.whiteboard.serializer;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.boot.jackson.*;

import com.arafat.whiteboard.model.Course;
import com.arafat.whiteboard.model.Instructor;
import com.arafat.whiteboard.model.Post;
import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.TreeNode;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.node.TextNode;

@JsonComponent
public class PostSerializerDeserialize {
 
    public static class PostJsonSerializer 
      extends JsonSerializer<Post> {

        @Override
        public void serialize(Post post, JsonGenerator jsonGenerator, 
          SerializerProvider serializerProvider) throws IOException, 
          JsonProcessingException {

            String timestamp = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(post.getCreatedAt());
            String id = post.getpostId()+"";
            jsonGenerator.writeStartObject();
            jsonGenerator.writeStringField("postId", id);
            jsonGenerator.writeStringField(
              "postTitle", post.getPostTitle());
            jsonGenerator.writeStringField(
              "postText", post.getPostText());
            jsonGenerator.writeStringField(
              "timeStamp", timestamp);
            jsonGenerator.writeStringField("createdBy", post.getInstructor().getInstructorId()+"");
            jsonGenerator.writeStringField("courseId", post.getCourse().getcourseId()+"");
            jsonGenerator.writeStringField("filePath", post.getPostFileName());
            jsonGenerator.writeStringField("fileType", post.getPostFileType());
            jsonGenerator.writeEndObject();
        }

        // private static String getColorAsWebColor(Color color) {
        //     int r = (int) Math.round(color.getRed() * 255.0);
        //     int g = (int) Math.round(color.getGreen() * 255.0);
        //     int b = (int) Math.round(color.getBlue() * 255.0);
        //     return String.format("#%02x%02x%02x", r, g, b);
        // }
    }

    public static class PostJsonDeserializer 
      extends JsonDeserializer<Post> {

        // private ObjectMapper objectMapper;

        // public PostJsonDeserializer(ObjectMapper objectMapper) {
        //     this(objectMapper, null);
        // }
    
        // public PostJsonDeserializer(ObjectMapper objectMapper, Class<> vc) {
        //     super(vc);
        //     this.objectMapper = objectMapper;
        // }
 
        /* (non-Javadoc)
         * @see com.fasterxml.jackson.databind.JsonDeserializer#deserialize(com.fasterxml.jackson.core.JsonParser, com.fasterxml.jackson.databind.DeserializationContext)
         */
        @Override
        public Post deserialize(JsonParser jsonParser, 
          DeserializationContext deserializationContext)
          throws IOException, JsonProcessingException {
 
            TreeNode treeNode = jsonParser.getCodec().readTree(jsonParser);


            
            String title = ((TextNode) treeNode.get("postTitle")).asText();
            String text = ((TextNode) treeNode.get("postText")).asText();
            String date = ((TextNode) treeNode.get("timeStamp")).asText();
            // Long createdBy = ((TextNode) treeNode.get("createdBy")).asLong();
            // Long courseId = ((TextNode) treeNode.get("courseId")).asLong();
            String posterId = ((TextNode) treeNode.get("createdBy")).asText();
            String courseID= ((TextNode) treeNode.get("courseId")).asText();
            

            TextNode fileName = (TextNode) treeNode.get("filePath");
            TextNode fileType = (TextNode) treeNode.get("fileType");
           
            String fileNameStr="No file";
            String fileTypeStr="*";

            if(fileName !=null && fileType!=null){
                 fileNameStr = fileName.asText();
                 fileTypeStr = fileType.asText();
            }


            Long createdBy = Long.parseLong(posterId);
            Long courseId = Long.parseLong(courseID);
            
            Date createdAt = new Date();

            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");

            // convert string date to type Date
            try {
              createdAt = sdf.parse(date);
            } catch (Exception e) {
              //      : handle exception
              System.out.println("Exception: " + e);
            }

            // String date2 = sdf.format(createdAt);
           




            return new Post().setPostTitle(title)
            .setPostText(text)
            .setCreatedAt(createdAt)
            .setCourse(new Course().setCourseId(courseId))
            .setInstructor(new Instructor().setInstructorId(createdBy))
            .setPostFileName(fileNameStr)
            .setPostFileType(fileTypeStr)
            
            ;
        }
    }
}
