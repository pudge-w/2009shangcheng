import http from "./http";

export const getBannerListApi = params => http.get("/home/banner", params);

export const getRecommendListApi = params =>
  http.post("/home/recommend", params);
