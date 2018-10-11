
<center>
<img src="https://codemedialab.com/wp-content/uploads/2017/09/reactjsicon-150x150.png" alt="React" />        
<img src="http://www.newthinktank.com/wp-content/uploads/2015/04/Sass-Tutorial.png" alt="Sass" />
<img src="https://mehraban.com.au/img/posts/webpacklogo.png"  alt="Webpack" />
<img src="https://sdtimes.com/wp-content/uploads/2018/09/1_JsyV8lXMuTbRVLQ2FPYWAg-150x150.png" alt="Typescript" />
</center>

## Presentation

Hi my dear loving world !

What you will find here is another simple React starter kit. I already hear you saying "Borring... NEXT !".
Indeed. I totally agree !
Buuuuut, if you want to give it a chance to start a simple and lightweight React project, be my guest, I hope it will fit to your needs.


## My motivation

I started to work on a React project which was already well advanced and I was frustrated to not understand very well how it was working so I decided to take time to build my simple project on my own to have a better comprehension of what I was doing and how every small bricks interacts with each other, from transpiling to building, passing through coding React component in Typescript.
I have a strong experience in Angular 2+ so I took a few ideas that I was confortable with and see how I could put it all together in a React project.


## Recipe

Here is the list of my sweet ingredients to make it taste good to me:

- **Webpack 4** because despite the fact that it's an evil machine, it's god damn powerful
- **Typescript 3** because Ts is life
- **Dotenv** to handle configuration by environment
- **SASS** because I like it and I [do what the fuck I want](http://www.wtfpl.net/) :)
- **React** because we can't escape from its hype...


## Architecture

Below is how I role play the architect:

```bash
.
├── config      ===> webpack configuration
├── scripts     ===> global project scripts: translations generation, building script, ...
├── src         ===> project root container
│   ├── app     ===> here will be the container of the awesomness you will create
│   │   ├── components      ===> your sweet little components
│   │   └── index.tsx       ===> app entry point
│   ├── environments
│   ├── public              ===> public folder
│   │   ├── assets          ===> will contains the public assets like fonts, images, ...
│   │   ├── favicon.ico
│   │   └── index.html
│   └── styles              ===> global project styles, variables, mixins
│       ├── core
            ├── _mixins.scss
│       │   └── _variables.scss
│       └── style.scss
├── tsconfig.json

```


## Preparation

In order to prepare this recipe in good conditions, you will first need to have some utensils, some good ones:

- [Node](https://nodejs.org/en/download/) v9 or later
- [Yarn](https://yarnpkg.com/en/docs/install) (Oooh god ! npm is so 2016...)


## Cooking

Just yarn it

```
yarn install
```

Ready to eat !


## To take away

To build it in order to deploy it, just run `yarn build:prod`


## Patterns

### Styling

This project uses Sass because I find it powerful and it lets you have a nice architecture in your styles. 
In order to implement a viable and simple way of handling styles in the project, and above all avoid conflicts between my css rules I started to read a lot of very intersting stuff about [CSS Modules](https://github.com/css-modules/css-modules), CSS-in-JS, pure or passing by [styled-components](https://www.styled-components.com/) or [Radium](https://github.com/FormidableLabs/radium) and [React Shadow](https://github.com/Wildhoney/ReactShadow).
And I have to say that at the end, I was a little bit lost because almost every articles I read were saying that you can't handle every problematics with only one way, one library.
I was frustrated because what I wanted is to have a very simple method to achieve it. Of course, I know that in big scalable projects, it can be useful to use these awesomes libraries but if you use this repo, I think you will add it by yourself.
Every ways has its pros and cons.
So I ended up with that very simple solution:

#### Add global style
* Create a .scss file, in the **styles** folder to add global styles, add mixins, variables and so on

#### Add component style
* Create a .scss file at the same level of your component (or anywhere else, it's up to you) and just surround your rules by a root rule to create a 'local scope' component styling: 

```scss
.hello {
    ...
    h1 {
        ...
    }
    &:hover {
        ...
    }
}
```


### Configuration

In order to configure your app, you will have 3 configuration files:
- `.env` at the project's root, which you won't find in the repo because it's an untracked file and a good practice is to keep it like this because it's in here that you will put your sensitive configuration
- `src/app/environments/.env.#{currentEnvironment}` will contains the configuration of the current environment e.g: .env.development
- `src/app/environments/.env.local` will override the others configuration files in the **development mode ONLY**

If you want to add a new environment file, just follow the same pattern combined with the proper command in the package.json


## Extras

In the next days/weeks/months, I'm planning to add a postinstall script which would allows you to optionally add some extra stuff:

- [ ] React router
- [ ] StoryBook
- [ ] SSR
- [ ] Redux
- [ ] React Bootstrap
- [ ] React Material


## Readings

After that, I recommend reading through the following articles:

- [Piotr Witek’s React & Redux in TypeScript - Static Typing Guide](https://github.com/piotrwitek/react-redux-typescript-guide)
- [Webpack Documentation](https://webpack.js.org/concepts/)


## Discussion

If you try this repo, you might find some stuff you dislike and that's cool, we are all different, here is just a reflection of my vision now, maybe very naive but I'm an open minded guy so if you want to share some ideas, I will be glad to read it!
To do so, I invit you to create a PR about whatever you want ;)


