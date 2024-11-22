import { supabase } from "../config/configSupabase.js";

export class GenreModel {
  static async getAllRecords() {
    try {
      // Kald til database
      let { data, error } = await supabase
        .from("genres")
        .select("id, title");
      if (error) {
        throw new Error(error.message);
      } else {
        return data;
      }
    } catch (error) {
      console.error(`Fejl: kan ikke hente genres:, ${error}`);
    }
  }

  static async getRecordById(id) {
    try {
      let { data, error } = await supabase
        .from("genres")
        .select("title, slug, created_at, updated_at")
        .eq("id", id)
        .single();
      if (error) {
        throw new Error(error.message);
      } else {
        return data;
      }
    } catch (error) {
      console.error(`Fejl: kan ikke hente genres med ID:, ${error}`);
    }
  }

  static async createRecord(formdata) {
    try {
      let { data, error } = await supabase
        .from("genres")
        .insert([
          {
            title: formdata.title,
            slug: formdata.slug,
          },
        ])
        .select();
      if (error) {
        throw new Error(error.message);
      } else {
        return data;
      }
    } catch (error) {
      console.error(`Fejl: kan ikke indsætte genre:, ${error}`);
    }
  }

  static async updateRecord(formdata) {
    try {
      let { data, error } = await supabase
        .from("genres")
        .update([
          {
            title: formdata.title,
            slug: formdata.slug,
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
      console.error(`Fejl: kunne ikke opdatere genres ${error}`);
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
      console.error(`Fejl: kunne ikke slette genre ${error}`);
    }
  }
}
