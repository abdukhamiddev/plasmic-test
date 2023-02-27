import {
  initPlasmicLoader,
  PlasmicRootProvider,
} from "@plasmicapp/loader-nextjs";

import "keen-slider/keen-slider.min.css";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "bTrCbG5K3cJQAWZKND4Yhg",
      token:
        "BR7RnyFE9lyjl1FLq3D4KDlTsQeyPYg8Nr2xsuwcIkBledmddbgTMu4btzafYrqutN5dFGfCDRFyRK1qdWw",
    },
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: true,
});

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host
import { registerAll } from "@plasmicpkgs/plasmic-sanity-io";

// import { registerAll as registerWodpress } from "@plasmicpkgs/plasmic-wordpress";
// import { registerAll as registerRevue } from "@plasmicpkgs/plasmic-revue";
// import { registerAll as ContentfulRegister } from "@plasmicpkgs/plasmic-contentful";
// import { registerAll as ContentstackRegister } from "@plasmicpkgs/plasmic-contentstack";
// import { registerAll as registerStrapi } from "@plasmicpkgs/plasmic-strapi";
// import { registerAll as registerPigeon } from "@plasmicpkgs/plasmic-pigeon-maps";
// import { registerAll as registerTypeform } from "@plasmicpkgs/plasmic-typeform";
// import { registerAll as registerCalendly } from "@plasmicpkgs/plasmic-calendly";
import { registerSlider as registerKeen } from "@plasmicpkgs/keen-slider";
// import { registerAll as googleMaps } from "@plasmicpkgs/plasmic-google-maps";
// import { registerAll as mailchimp } from "@plasmicpkgs/plasmic-mailchimp";
// import { registerAll as hubspot } from "@plasmicpkgs/plasmic-hubspot";
// import { registerAll as eventbrite } from "@plasmicpkgs/plasmic-eventbrite";
// import { registerAll as soundcloud } from "@plasmicpkgs/plasmic-soundcloud";
// import { registerAll as giphy } from "@plasmicpkgs/plasmic-giphy";
// import { registerAll as spotify } from "@plasmicpkgs/plasmic-spotify";
// import { registerAll as intercom } from "@plasmicpkgs/plasmic-intercom";
// import { registerAll as audio } from "@plasmicpkgs/plasmic-audio";


import { registerAll as yotpo } from "@plasmicpkgs/plasmic-yotpo";

//@ts-ignore
// yotpo(PLASMIC);
// registerRevue(PLASMIC);
// ContentfulRegister(PLASMIC);
// ContentstackRegister(PLASMIC);
// registerPigeon(PLASMIC);
// registerTypeform(PLASMIC);
registerKeen(PLASMIC);
// hubspot(PLASMIC);
// googleMaps(PLASMIC);
// eventbrite(PLASMIC);
// soundcloud(PLASMIC);
// mailchimp(PLASMIC);
// spotify(PLASMIC);




