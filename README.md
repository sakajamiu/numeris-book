# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules. however in order to have a consistent and cohernt code base that conforms to modern standards and best practices, there might be certain conventions you might want to be familier with before jumping into the project.

## Project Set up

 1.  git clone https://github.com/sakajamiu/numeris-book.git, clone project from the git repository to your working directory on your machine.
 2.  run the `yarn` command on you system to install all needed dependencies in your project, please use yarn, as it is the package manage of choice for this project. dont have yarn ? [Install Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)
 3. vs code settings, make sure you have the eslint and prettier extensions installed on you vs code, in your vscode make prettier your default formater, and enable the format on save feature on your vs code.

 
## Component Hierarchy &  Pseudo Entry Points

```
src/App.tsx
src/hoc/admin-dashboard-layout
src/hoc/admin-dashboard-wrapper
src/routes
src/routes/dashboard
```

These are the pseudo entry points to this application, this approach makes the App.tsx clean  allow us to lazy load the application, code splitting , and provide a general fallback to the app. there by improving the page laod time and user eperience. the admin-dashboard-layout is responsible for the theming logic of the dashboard. the admin-dashboard-wrapper is the entry to the dashboard and check oif user is authenticated to access the dashbord routes. routes/dashboard manage all dashboard routes while the routes/index folder manage all the project routes.

## Folder Structure & Design system

As can be observed from the folder structure,the folder structure follows the atomic design principle, so it is imperative for you to follow suit, components should go to the appropriate folders during or after building them :

```
components/atoms
components/molecules
components/organisms
```

To learn more about Atomic Design, take a look at the following resources:

- [Atomic Design Resource](https://bradfrost.com/blog/post/atomic-web-design/) - learn about atomic design.
- [Atomic Design Resource](https://uxdesign.cc/atomic-design-how-to-design-systems-of-components-ab41f24f260e) - learn more.

##### More on Folder Structure

To simplify things further we abstrated atomics design  templates into Hocs and layouts , this gives pages consistent layout and structure,

###### difference between HOC and layout

> HOC are general templates that wrap a page adding  functionality(data fetching (*only when needed*), complex logics, components) to it.

> Layouts are concern with only css layout or style layout (moslty abstracted into components or group of components) that are repeated either across pages(page layout) or repeated across components(ui layout), this layouts should not contain any data fetching inside them, or logics related to data fetching.


```
src/hoc/admin-dashboard-wrapper
src/hoc/admin-dashboard-layout

```
##### Naming Individual Components

When naming Individual components , which can either be an atom, molecule or organism for consistency and clearity, file name should be in lowercase words separated by hyphens, and should follow the BEM convention, which is illustrated below.

![File Naming Convention](https://miro.medium.com/max/1400/0*ijUbJg2nzgbXucgw.png)


```bash
-- without modifiers
* a-button
* m-sidebar
* o-admin-side-nav-items

-- with modifiers

* a-loading-indicator
* m-top-navigation
* o-invoice-receipt

```

Open [File Naming Convention Resource](https://medium.com/@masacarvalho/atomic-design-system-with-abem-naming-convention-part-1-983d7d6ec3d7) learn more.

> #### Components Interfaces and Interface Naming Convention
 >  interface should reside in the same file as it's  component. and the Name of the component should be the name of the interface adding Props as a sufix to  it. **Dont use the I prefix** , as this was discouraged by the typescript team , wrong would be __IComponentName__, and example of the proper naming convention is below.

 ```
 interface MyComponentProps {
  property : string
  ..... : ..
 }

 const MyComponent = () => ....
 }
 ```
 > keys of the interface should have the same name as the keys of the properties the component is expecting,  its should match the keys of the properties returned by the backend.


 > this can be disregarded only if the interface is repeated more than twice, or the interface is more than 15 lines long, then it make sense to abstract at that point.

#### Folder Import with Relative Path

the import is in relative to the src folder e.g src/components/atom/a-button is imported as components/atoms/a-button because the components path is defined in the tsconfig file and the vite config file. this is to make sure that at a glance it is immediately obvious where a folder is imported from unlike the traditional ../../../ importing structure that can be messy and is not immediately clear when the folder is from. 
if there is a need to add a new folder under the src, please configure its path in the tsconfig and vite.config  file

### Icons and Style choices

All Icons should be rewritten as a component and not export as image or svg. this is to ensure icons can be reused if the color or size changes as the need arises. it will also reduce the size of the project bundle making the app faster and easier to maintain in the long run.


