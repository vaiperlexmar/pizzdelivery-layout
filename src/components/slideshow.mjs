"use strict";

import Glide, {
  Controls,
  Autoplay,
} from "@glidejs/glide/dist/glide.modular.esm";

new Glide(".glide", {
  type: "carousel",
  startAt: 0,
  perView: 1.5,
  autoplay: 3500,
}).mount({ Controls, Autoplay });
