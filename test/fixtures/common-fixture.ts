import {Model} from "../../src/model"
import {Add} from "vineyard-ground"

export class Common_Fixture {
  private model: Model

  constructor(model: Model){
    this.model = model
  }

  populate(){
    return this.model.Sample.create({
      name: "This is a sample",
    })
  }
}