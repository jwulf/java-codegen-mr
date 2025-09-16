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

## Regenerate Only
To (re)generate without full compilation:
```bash
mvn -Popenapi clean generate-sources
```

## Configuration Highlights (see `pom.xml`)
- Generator: `java`
- Library: `${openapi.generator.library}` (currently `webclient`)
- Packages:
  - API: `com.example.api`
  - Models: `com.example.model`
  - Invoker: `com.example.client`
- Tests disabled for faster iteration (`generateApiTests=false`, `generateModelTests=false`).

Adjust via Maven properties or plugin `<configuration>`.

## Changing the HTTP Library
Edit property `openapi.generator.library` in `pom.xml` (examples: `feign`, `okhttp-gson`, `jersey2`, `resttemplate`). Then rebuild.

## After Generation: Using the Client
Add your own code under `src/main/java` and import generated classes, e.g.:
```java
// Example usage (after generation)
// var api = new com.example.api.DefaultApi();
```

## Validating the Spec
Build fails if `rest-api.yaml` is invalid. You can manually validate with:
```bash
mvn org.openapitools:openapi-generator-maven-plugin:validate
```

## Updating the Spec
Modify `rest-api.yaml` and re-run the build. Avoid editing generated files (they will be overwritten).

## Testing
Add tests under `src/test/java` (JUnit 5 dependency included). Run:
```bash
mvn test
```

## License
Apache 2.0 (adjust as needed).

---
Generated client versioning is tied to the `rest-api.yaml` evolution; consider tagging commits post-generation for traceability.

