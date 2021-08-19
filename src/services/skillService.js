import httpCommon from './httpCommon';

const getAllSkill = () => {
  return httpCommon.get('skill/all');
};
const getSkillId = id => {
  return httpCommon.get(`skill/${id}`);
};

const deleteSkill = id => {
  return httpCommon.delete(`skill/delete/${id}`);
};

const updateSkill = (id, updatedEvent) => {
  return httpCommon.put(`skill/update/${id}`, updatedEvent);
};
const postSkkill = dados => {
  return httpCommon.post('skill/add/', dados);
};

export default {
  getAllSkill,
  getSkillId,
  deleteSkill,
  updateSkill,
  postSkkill,
};
