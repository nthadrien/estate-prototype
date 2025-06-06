# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
# estate-prototype


# Pannellum 2.5.6

## About
Pannellum is a lightweight, free, and open source panorama viewer for the web. Built using HTML5, CSS3, JavaScript, and WebGL, it is plug-in free. It can be deployed easily as a single file, just 21kB gzipped, and then embedded into pages as an `<iframe>`. A configuration utility is included to generate the required code for embedding. An API is included for more advanced integrations.

## Browser Compatibility
Since Pannellum is built with web standards, it requires a modern browser to function.

#### Full support (with appropriate graphics drivers):
* Firefox 23+
* Chrome 24+
* Safari 8+
* Internet Explorer 11+
* Edge

The support list is based on feature support. As only recent browsers are tested, there may be regressions in older browsers.

#### Not officially supported:
Mobile / app frameworks are not officially supported. They may work, but they're not tested and are not the targeted platform.

## Translations
All user-facing strings can be changed using the `strings` configuration parameter. There exists a [third-party respository of user-contributed translations](https://github.com/DanielBiegler/pannellum-translation) that can be used with this configuration option.

## Seeking support
If you wish to ask a question or report a bug, please open an issue at [github.com/mpetroff/pannellum](https://github.com/mpetroff/pannellum). See the _Contributing_ section below for more details.

## Contributing
Development takes place at [github.com/mpetroff/pannellum](https://github.com/mpetroff/pannellum). Issues should be opened to report bugs or suggest improvements (or ask questions), and pull requests are welcome. When reporting a bug, please try to include a minimum reproducible example (or at least some sort of example). When proposing changes, please try to match the existing code style, e.g., four space indentation and [JSHint](https://jshint.com/) validation. If your pull request adds an additional configuration parameter, please document it in `doc/json-config-parameters.md`. Pull requests should preferably be created from [feature branches](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow).

## License
Pannellum is distributed under the MIT License. For more information, read the file `COPYING` or peruse the license [online](https://github.com/mpetroff/pannellum/blob/master/COPYING).

In the past, parts of Pannellum were based on [three.js](https://github.com/mrdoob/three.js) r40, which is licensed under the [MIT License](https://github.com/mrdoob/three.js/blob/44a8652c37e576d51a7edd97b0f99f00784c3db7/LICENSE).

The panoramic image provided with the examples is licensed under the [Creative Commons Attribution-ShareAlike 3.0 Unported License](http://creativecommons.org/licenses/by-sa/3.0/).

## Credits

* [Matthew Petroff](http://mpetroff.net/), Original Author
* [three.js](https://github.com/mrdoob/three.js) r40, Former Underlying Framework

If used as part of academic research, please cite:

> Petroff, Matthew A. "Pannellum: a lightweight web-based panorama viewer." _Journal of Open Source Software_ 4, no. 40 (2019): 1628. [doi:10.21105/joss.01628](https://doi.org/10.21105/joss.01628)