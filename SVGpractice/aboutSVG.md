# Implementation of SVG files

Simple examples with info on advantages and disavdantages of using implmentation method.

1. Embed directly insised <svg> tags

- E.g. :

      <svg>
        <rect width="500" height="300" />
      </svg>

- Advantages:

  - can acces via DOM

  - modigy using JSand CSS

2. Usingthe <img> tag

- E.g.:

  <img src= ./SVGpractice/assets/img/SabLogoSq100.svg  alt="My logo">
  for MD puuposes:
  ![](./SVGpractice/assets/img/SabLogoSq100.svg)

- Advantage:

  - can be cached
  - good performance
  - good for logo's and icons(image stability)

- Disadvantage:

  - cannot be manipulated by JS or CSS
  - poor for resizing photos or compliated images that requires intelligent cropping.

3. SVG as Background Image

- E.g.:

      .main{
        background: url(mySVGbackground.svg);
       }
