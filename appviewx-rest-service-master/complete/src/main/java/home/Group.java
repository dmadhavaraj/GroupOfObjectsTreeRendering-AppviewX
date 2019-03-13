package home;
import java.util.*; 

class Group {

	int id;
	String name;
	List<Object> objects;

	public Group(int id, String name, List<Object> objects) {
		super();
		this.id = id;
		this.name = name;
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

	public List<Object> getObjects() {
		return objects;
	}

	public void setObjects(List<Object> objects) {
		this.objects = objects;
	}

}
