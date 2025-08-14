An extremely simplified version of [Bruno Andrade](https://github.com/brunoandradebr)'s [web integration](https://github.com/brunoandradebr/nzxt) for use with the NZXT Kraken.

Allows for the use of a GIF that isn't from Tenor or Giphy search with the theme and runs locally.

To modify the theme you can put a gif named `bgGif.gif` in the `src/assets` folder. The progress bars and CPU/GPU monitors can be modified/styled in `src/components/Progress/index.tsx` and `src/components/DualMonitor/index.tsx`.

To run locally use `yarn dev`.

Using the Windows task schedular and vbs/batch, you can run the program on startup instead of manually running it and then reloading in NZXT CAM every time you boot.