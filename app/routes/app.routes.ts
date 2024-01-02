import { RoutingComponents } from "./routing-components";
import { Validator } from "../core/utilities/validator/validator";
import { userSchema } from "./payload_schemas/user-schemas";


export class AppRoutes {
  AppGetRoutes: any[];
  AppPostRoutes: any[];
  AppUpdateRoutes: any[];
  AppDeleteRoutes: any[];
  public validator: Validator;


  constructor() {
    const routingComponents: RoutingComponents = new RoutingComponents();
    this.validator = new Validator();
    
 

    /**
     * GET Data APIs list
     */
    this.AppGetRoutes = [
      {
        path: "/allUserDetails",
        component: [
          routingComponents.GetUser.bind(routingComponents),
        ],
      },

      //  todo remove after data fatech done..
      // 404
      {
        path: "*",
        component: [routingComponents.pageNotFound.bind(routingComponents)],
      },
    ];

    /**
     * POST APIs list
     */
    this.AppPostRoutes = [
      // CreateUser
      {
        path: "/createUser",
        component: [
          this.validator.validateBodyPayload.bind(this.validator, userSchema),
          routingComponents.CreateUser.bind(routingComponents),
        ],
      },

      // UserLogin

      
    ];
    /**
     * Put calls
     */
    this.AppUpdateRoutes = [
      {
        path: "/updateUser",
        component: [
          routingComponents.UpdateUser.bind(routingComponents),
        ],
      },
     
    ];
    /**
     * Delete calls
     */
    this.AppDeleteRoutes = [
      {
        path: "/delete/user/:id",
        component: [
          routingComponents.DeleteUser.bind(routingComponents),
        ],
      },
    ];
  }
}