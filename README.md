# REST API Java Client Generation

This project demonstrates generating a Java client from the `rest-api.yaml` OpenAPI specification using the `openapi-generator-maven-plugin`.

## Prerequisites
- Java 17+
- Maven 3.8+

## Generate the Client
Run a standard build; generation occurs in the `generate-sources` phase:

```bash
mvn clean compile
```

Generated sources appear under:
```
target/generated-sources/openapi
```
They are automatically added to the compile classpath.

## Findings

Schema mapping can be used to coerce a primitive string type. 

```xml
<schemaMappings>
    <schemaMapping>ProcessInstanceKey=String</schemaMapping>
</schemaMappings>
```

outputs:

```java
public class DemoResponse {
  public static final String JSON_PROPERTY_PROCESS_INSTANCE_KEY = "processInstanceKey";
}
```

## License
Apache 2.0 (adjust as needed).

---
Generated client versioning is tied to the `rest-api.yaml` evolution; consider tagging commits post-generation for traceability.

