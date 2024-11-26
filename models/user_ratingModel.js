import { supabase } from "../config/configSupabase.js";

export class UserRatingModel {
  static async getAllRecords() {
    try {
      // Kald til database
      let { data, error } = await supabase
        .from("user_rating")
        .select("user_id, poster_id, num_stars, created_at");
      if (error) {
        throw new Error(error.message);
      } else {
        return data;
      }
    } catch (error) {
      console.error(`Fejl: kan ikke hente user profiles:, ${error}`);
    }
  }

  static async getRecordById(id) {
    try {
      let { data, error } = await supabase
        .from("user_rating")
        .select("poster_id, num_stars, created_at")
        .eq("id", id)
        .single();
      if (error) {
        throw new Error(error.message);
      } else {
        return data;
      }
    } catch (error) {
      console.error(`Fejl: kan ikke hente poster, ${error}`);
    }
  }

  static async createRecord(formdata) {
    try {
      let { data, error } = await supabase
        .from("user_rating")
        .insert([
          {
            user_id: formdata.user_id,
            poster_id: formdata.poster_id,
            num_stars: formdata.num_stars,
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
        .from("user_rating")
        .update([
          {
            user_id: formdata.user_id,
            poster_id: formdata.poster_id,
            num_stars: formdata.num_stars,
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
        .from("user_rating")
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
