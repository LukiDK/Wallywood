import { supabase } from "../config/configSupabase.js";

export class CartlineModel {
  static async getAllRecords() {
    try {
      // Kald til database
      let { data, error } = await supabase
        .from("cartlines")
        .select("id, user_id, poster_id, quantity, created_at");
      if (error) {
        throw new Error(error.message);
      } else {
        return data;
      }
    } catch (error) {
      console.error(`Fejl: kan ikke hente cartlines:, ${error}`);
    }
  }

  static async getRecordById(id) {
    try {
      let { data, error } = await supabase
        .from("cartlines")
        .select("id, user_id, poster_id, quantity, created_at")
        .eq("id", id)
        .single();
      if (error) {
        throw new Error(error.message);
      } else {
        return data;
      }
    } catch (error) {
      console.error(`Fejl: kan ikke hente cartline med ID:, ${error}`);
    }
  }

  static async createRecord(formdata) {
    try {
      let { data, error } = await supabase
        .from("cartlines")
        .insert([
          {
            user_id: formdata.user_id,
            poster_id: formdata.poster_id,
            quantity: formdata.quantity,
          },
        ])
        .select();
      if (error) {
        throw new Error(error.message);
      } else {
        return data;
      }
    } catch (error) {
      console.error(`Fejl: kan ikke indsætte cartline:, ${error}`);
    }
  }

  static async updateRecord(formdata) {
    try {
      let { data, error } = await supabase
        .from("cartlines")
        .update([
          {
            user_id: formdata.user_id,
            poster_id: formdata.poster_id,
            quantity: formdata.quantity,
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
      console.error(`Fejl: kunne ikke opdatere cartline ${error}`);
    }
  }

  static async deleteRecord(formdata) {
    try {
      let { data, error } = await supabase
        .from("cartlines")
        .delete()
        .eq("id", formdata.id)
        .select();
      if (error) {
        throw new Error(error.message);
      } else {
        return data;
      }
    } catch (error) {
      console.error(`Fejl: kunne ikke slette cartline ${error}`);
    }
  }
}
