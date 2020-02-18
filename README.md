# configs-public
Shared Resources

# TSLint
This is a central location for our tslinting rules.  Including `cli-shared-tslint-rules` as a 
dev dependency will add these lint files to a project, and the local tslint file can then ```
{
    "extends": "cli-shared-tslint-rules/tslint-config",
}
```

to grab our unified lints.
