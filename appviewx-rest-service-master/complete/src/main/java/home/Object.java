package home;
import java.util.*;

class Object {
	int id;
	String name;
	Status status;
	ColorCode colorCode;
	List<Object> objects;

	public Object(int id, String name, Status status, ColorCode colorCode, List<Object> objects) {
		super();
		this.id = id;
		this.name = name;
		this.status = status;
		this.colorCode = colorCode;
		this.objects = objects;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Status getStatus() {
		return status;
	}

	public void setStatus(Status status) {
		this.status = status;
	}

	public ColorCode getColorCode() {
		return colorCode;
	}

	public void setColorCode(ColorCode colorCode) {
		this.colorCode = colorCode;
	}

	public List<Object> getObjects() {
		return objects;
	}

	public void setObjects(List<Object> objects) {
		this.objects = objects;
	}

}

enum Status {
	ENABLED, DISABLED
}

enum ColorCode {
	RED, BLUE, GREEN
}
