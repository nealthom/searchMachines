# Search

Need to work on the structure

## Project structure

The boilerplate structure and files are the same as this repo minus the _bin_ folder, everything else is exactly the same.

```
*root*
|
├── */src/*
│   ├── */assets/* where images and stuff are stored
│   ├── */containers/* react-router jsx pages
│   ├── *App.js* main layout
│   ├── *index.js* javascript entry point
│   ├── *styles.scss* styling
│   └── */tests/* contains test environment (Jest + Enzyme)
│       ├── */__mock__/* contains setup to provide a valid path for imports
│       ├── */_tests__/* the actual tests
│       └── *setup.js* setup for enzyme for react 16
├── *package.json* the whole package.json with every dependency and script, nothing is kept hidden
├── *index.html* entry point
└── *README.md* this file
```

## Tests

The testing environment is written in Jest and Enzyme.
The included tests are very basic and only check the proper render of base components + routes, there are no snapshot tests, I did not feel they were needed being the components really basic, at the first change they would need to be updated, imho setting the wrong approach of _"hey tests are broken, let's regenerate snapshots again"_.
While still basic, the default tests are easy to manage and expand, providing a smoother curve into testing with JavaScript and React.
