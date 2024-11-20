import { supabase } from "../config/configSupabase.js";

export class PostersModel {
  static async getAllRecords() {
    try {
      // Kald til database
      let { data, error } = await supabase
        .from("posters")
        .select("id, name, description, price, stock");
      if (error) {
        throw new Error(error.message);
      } else {
        return data;
      }
    } catch (error) {
      console.error(`Fejl: kan ikke hente posters, ${error}`);
    }
  }

  static async getRecordById(id) {
    let { data, error } = await supabase
      .from("posters")
      .select("name, description, price, stock")
      .eq("id", id)
      .single();
    if (error) {
      throw new Error(error.message);
    } else {
      return data;
    }
  }

  static async createRecord(formdata) {
    try {
      let { data, error } = await supabase
        .from("posters")
        .insert([
          {
            name: formdata.name,
            slug: formdata.slug,
            description: formdata.description,
            image: formdata.image,
            width: formdata.width,
            height: formdata.height,
            price: formdata.price,
            stock: formdata.stock,
          },
        ])
        .select();
      if (error) {
        throw new Error(error.message);
      } else {
        return data;
      }
    } catch (error) {
      console.error(`Fejl: kan ikke insætte poster, ${error}`);
    }
  }

  static async updateRecord(formdata) {
    try {
      let { data, error } = await supabase
        .from("posters")
        .update([
          {
            name: formdata.name,
            slug: formdata.slug,
            description: formdata.description,
            image: formdata.image,
            width: formdata.width,
            height: formdata.height,
            price: formdata.price,
            stock: formdata.stock,
          },
        ])
        .eq("id", formdata.id)
        .select();
      if (error) {
        throw new Error(error.message);
      } else {
        return data;
      }
    } catch (error) {
      console.error(`Fejl: kunne ikke opdatere poster ${error}`);
    }
  }

  static async deleteRecord(formdata) {
    try {
      let { data, error } = await supabase
        .from("posters")
        .delete()
        .eq("id", formdata.id)
        .select();
      if (error) {
        throw new Error(error.message);
      } else {
        return data;
      }
    } catch (error) {
      console.error(`Fejl: kunne ikke slette poster ${error}`);
    }
  }
}
