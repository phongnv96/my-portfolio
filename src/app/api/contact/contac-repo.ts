import { db } from "../db";

const ContactInfo = db.ContactInfo;

export const ContactInfosRepo = {
  getAll,
  getById,
  create,
  delete: _delete,
};

async function getAll() {
  return await ContactInfo.find();
}

async function getById(id: any) {
  return await ContactInfo.findById(id);
}

async function create(params: any) {
  const contactInfo = new ContactInfo({
    ...params,
  });

  // save ContactInfo
  await contactInfo.save();
}

async function _delete(id: any) {
  await ContactInfo.findByIdAndRemove(id);
}
