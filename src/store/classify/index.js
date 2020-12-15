import { getClassifyListApi } from "../../utils/api";

const classify = {
  state: {
    classifyList: []
  },
  mutations: {
    changeClassifyList(state, payload) {
      state.classifyList = payload;
    }
  },
  actions: {
    async getClassifyList({ commit }, payload) {
      const res = await getClassifyListApi({
        type: payload.type
      });
      commit("changeClassifyList", res.result);
    }
  }
};

export default classify;
