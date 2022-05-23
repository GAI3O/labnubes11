import { Router } from "express";
import * as Controller from "./controller";

const productRouter = Router();

productRouter.route("/").get(Controller.getProducts);
productRouter.route("/createShow").post(Controller.postProducts);
productRouter.route("/createShow").get(Controller.productsShow);
productRouter.route("/update/:id").get(Controller.updateProductsShow);
productRouter.route("/update/:id").post(Controller.updateProducts);
productRouter.route("/delete/:id").get(Controller.deleteProducts);

export default productRouter;
