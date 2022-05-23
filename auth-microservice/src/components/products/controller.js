/**
 * Routes for products
 */
import productCrud from "./model"

export const getProducts = async (req, res) => {
  
  const data = await productCrud.find()
  res.render("index",{data})
};

export const productsShow = async (req, res) => {
  
  res.render("create")
};

export const postProducts = async (req, res) => {
  
  console.log(req.body)
  const object = productCrud(req.body)
  const crudSaved = await object.save();

  console.log(crudSaved)
  res.redirect('/')
};

export const updateProductsShow = (req, res) => {
  const idt = String(req.params.id)
  productCrud.findOne({_id: idt}, (err,crud) => {
    if (err) {
      console.log(err)
    }else{
      res.render("update",{crud})
    }
  });
  
  
};

export const updateProducts = (req, res) => {
  
  const idt = String(req.params.id)
  productCrud.findOneAndUpdate({_id: idt},req.body, (err) => {
    if (err) {
      console.log(err)
    }
    console.log("Update");
    res.redirect('/')

  });
};

export const deleteProducts = (req, res) => {
  const idt= String(req.params.id)
  productCrud.findOneAndRemove({_id: idt}, (err) => {
    if (err) {
      console.log(err)
    }
    console.log("Delete");
    res.redirect('/')

  });
};