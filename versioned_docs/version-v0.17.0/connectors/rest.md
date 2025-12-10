---
description: Automatically generate steps from any OpenAPI endpoint and include them in your forensic and ediscovery workflows with the Phoenix REST connector.
---

# REST Connector

The Phoenix REST Connector allows users to connect to REST services.

This connector works by generating steps from an OpenAPI specification defined in
the configuration.

SCL examples available [here](../examples/connectors/rest/rest.md).

Source code available on [GitLab](https://gitlab.com/Phoenix/connectors/rest).

## Connector Settings

```json
"Phoenix.Connectors.Rest": {
  "Id": "Phoenix.Connectors.Rest",
  "Version": "0.18.0",
  "Settings": {
    "Specifications": [{
        "Name": "Examples",
        "BaseURL": "http://baseURL",
        "SpecificationURL": "https://raw.githubusercontent.com/OAI/OpenAPI-Specification/main/examples/v3.0/api-with-examples.json",
        "StepAliases": {
            "Example_users_Get": "ExampleGetUsers"
        }
      }]
  }
}
```

Each Specification has the following properties

| Name                  | Required |   Type   | Description                                   |
| :-------------------- | :------: | :------: | :-------------------------------------------- |
| Name                  |    ✔     | `string` | The name of the Specification                 |
| BaseURL               |    ✔     | `string` | The base url to send queries to               |
| Specification         |          | `string` | Text of the OpenAPI specification to use      |
| SpecificationURL      |          | `string` | Url of the Specification to use               |
| SpecificationFilePath |          | `string` | File path of the Specification to use         |
| StepAliases           |          | `Entity` | An entity mapping step names to their aliases |

Exactly one of `Specification`, `SpecificationURL`, and `SpecificationFilePath` must be set.

Each operation in the specification will map onto its own step.
The name of the step will be the Specification name concatenated with the OperationId
separated by an underscore unless a StepAlias is used.
Each operation parameter will map to a Step parameter.
Each security definition will map to a Step parameter.
