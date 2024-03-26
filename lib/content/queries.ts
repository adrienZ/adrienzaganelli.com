import type { QueryBuilderWhere } from "@nuxt/content/types";

export const techGemsQuery: QueryBuilderWhere = {
    draft: false,
    _path: {
      $icontains: "tech-gems",
    },
  }
