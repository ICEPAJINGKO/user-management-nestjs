import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: String,
    firstName: String,
    lastName: String,
    dateOfBirth: { type: Date, require: true }
},
{
    timestamps: true, // เซ็ตให้ Mongoose สร้างเวลาการสร้างและเวลาการอัปเดตอัตโนมัติ
});