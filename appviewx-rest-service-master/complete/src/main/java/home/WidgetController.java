package home;

import java.util.concurrent.atomic.AtomicLong;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
public class WidgetController {

	@RequestMapping("/group/all")
	public Group[] getAllGroups(@RequestParam(value = "name", defaultValue = "value") String name) {

		Group[] allGroups = new Group[2];
		List<Object> objects = new ArrayList<Object>();

		// Build Objects
		final Object obj1 = new Object(1, "Obj1", Status.ENABLED, ColorCode.GREEN, null);
		final Object obj2 = new Object(2, "Obj2", Status.ENABLED, ColorCode.GREEN, null);
		objects.add(obj1);
		objects.add(obj2);
		final Object obj3 = new Object(3, "Obj3", Status.ENABLED, ColorCode.GREEN, objects);

		objects = new ArrayList<Object>();
		final Object obj4 = new Object(4, "Obj4", Status.DISABLED, ColorCode.RED, null);
		objects.add(obj4);
		final Object obj5 = new Object(5, "Obj5", Status.DISABLED, ColorCode.RED, objects);

		// Build Group
		objects = new ArrayList<Object>();
		objects.add(obj3);
		objects.add(obj5);
		final Group defaultGrp = new Group(1, "Default Group", objects);

		ObjectMapper objectMapper = new ObjectMapper();
		String json = null;
		try {
			json = objectMapper.writeValueAsString(defaultGrp);
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		allGroups[0] = defaultGrp;
		final Group testGrp = new Group(1, "TestGroup", objects);
		allGroups[1] = testGrp;
		
		return allGroups;
		// return json;
	}
}
