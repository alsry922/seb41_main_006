package com.mainproject.server.domain.chat.entity;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateTimeDeserializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateTimeSerializer;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
public class PublishMessage {
    @NotNull
    private Long roomId;
    @NotNull
    private Long senderId;
    @NotBlank
    private String content;
    @JsonSerialize(using = LocalDateTimeSerializer.class)
    @JsonDeserialize(using = LocalDateTimeDeserializer.class)
    private LocalDateTime createdAt;

    public PublishMessage(Long roomId, Long senderId, String content, LocalDateTime createdAt) {
        this.roomId = roomId;
        this.senderId = senderId;
        this.content = content;
        this.createdAt = createdAt;
    }
}
