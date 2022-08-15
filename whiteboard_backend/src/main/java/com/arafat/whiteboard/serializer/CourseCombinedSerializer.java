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
public class CourseCombinedSerializer {
 
    public static class CourseJsonSerializer 
      extends JsonSerializer<Course> {

        @Override
        public void serialize(Course course, JsonGenerator jsonGenerator, 
          SerializerProvider serializerProvider) throws IOException, 
          JsonProcessingException {

            String id = course.getcourseId()+"";
            String code = course.getCourseCode()+"";
            jsonGenerator.writeStartObject();
            jsonGenerator.writeStringField("courseId", id);
            jsonGenerator.writeStringField("courseCode", code);
            jsonGenerator.writeStringField(
              "courseTitle", course.getCourseTitle());
            jsonGenerator.writeStringField(
              "courseDescription", course.getCourseDescription());
            jsonGenerator.writeStringField(
              "courseGrade", course.getCourseGrade());
            jsonGenerator.writeStringField("courseMarks", course.getCourseMarks()+"");
            jsonGenerator.writeEndObject();
        }
        // "courseId": 12,
    //     "courseCode": null,
    //     "courseTitle": null,
    //     "creditHour": 0.0,
    //     "courseDescription": null,
    //     "courseMarks": null,
    //     "courseGrade": null,

       
    }

    public static class CourseJsonDeserializer 
      extends JsonDeserializer<Course> {

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
        public Course deserialize(JsonParser jsonParser, 
          DeserializationContext deserializationContext)
          throws IOException, JsonProcessingException {
 
            TreeNode treeNode = jsonParser.getCodec().readTree(jsonParser);


            
            String title = ((TextNode) treeNode.get("courseTitle")).asText();
            

            return new Course().setCourseTitle(title)
            
            
            ;
        }
    }
}



    
