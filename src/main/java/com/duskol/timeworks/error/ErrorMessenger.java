package com.duskol.timeworks.error;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ErrorMessenger {

    public ErrorMessenger(long code2, String message2) {
		// TODO Auto-generated constructor stub
	}
	private long code;
    private String message;
}
