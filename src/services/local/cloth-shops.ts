import {Shop} from "../../types/data.ts";
import {Area} from "../../types/enums.ts";

export const clothShops: Shop[] = [
  {
    "name": "Second hand store",
    "area": Area.CALLEJON,
    "location": {x: 0.457301, y: 0.791532},
    "check-possible": false,
    "discounts": [0.0, 0.1],
    "items": [],
  },
  {
    "name": "Exclusive Boutique",
    "area": Area.PENINSULAR,
    "location": {x: 0.292166, y: 0.598927},
    "check-possible": false,
    "discounts": [0.0, 0.1],
    "items": [],
  },
]