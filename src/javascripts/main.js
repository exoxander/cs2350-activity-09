// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css)$/i)

//TODO - Your ES6 JavaScript code (if any) goes here
import 'bootstrap'

import {movies} from "./movies";

for(let m of movies){
    let m_thumb = document.getElementById("m"+m.id);
    m_thumb.innerHTML = `<img src="${m.poster}" alt="${m.title}" class="img-thumbnail"`;
}