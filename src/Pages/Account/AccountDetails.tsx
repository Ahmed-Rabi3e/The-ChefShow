import { useState } from "react";
import { EditDialog } from "../../Components/Dialog";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";

export default function AccountDetails() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingField, setEditingField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: "Mohammed",
    lastName: "Ihap",
    email: "Mohamedihap12@gmail.com",
    phone: "+2010 70090950",
    password: "••••••••••",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleEdit = (field: string) => {
    setEditingField(field);
    setIsDialogOpen(true);
  };

  const handleClose = () => {
    setIsDialogOpen(false);
    setEditingField(null);
  };

  const handleSave = () => {
    // Here you would typically send the updated data to your backend
    console.log("Saving:", formData);
    handleClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const renderDialogContent = () => {
    switch (editingField) {
      case "name":
        return (
          <div className="grid">
            <div className="flex flex-col gap-4">
              <Label htmlFor="firstName" className="text-white">
                First Name
              </Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="col-span-3 bg-transparent text-white rounded-none border-gold-500"
              />
            </div>
            <div className="flex flex-col gap-4">
              <Label htmlFor="lastName" className="text-white">
                Last Name
              </Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="col-span-3 bg-transparent text-white border-gold-500"
              />
            </div>
          </div>
        );
      case "email":
        return (
          <div className="grid font-jakarta">
            <div className="flex flex-col gap-4">
              <Label htmlFor="email" className="text-white">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="col-span-3 bg-main_black text-white border-gold-500"
              />
            </div>
            <div className="flex flex-col gap-4">
              <Label htmlFor="password" className="text-white">
                Password
              </Label>
              <Input
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="col-span-3 bg-main_black text-white border-gold-500"
              />
            </div>
          </div>
        );
      case "phone":
        return (
          <div className="grid">
            <div className="flex flex-col gap-4">
              <Label htmlFor="phone" className="text-white">
                Phone
              </Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="col-span-3 bg-main_black text-white border-gold-500"
              />
            </div>
          </div>
        );
      case "password":
        return (
          <div className="grid gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="oldPassword" className="text-white">
                Old Password
              </Label>
              <Input
                id="oldPassword"
                name="oldPassword"
                type="password"
                value={formData.oldPassword}
                onChange={handleChange}
                className="col-span-3 bg-main_black text-white border-gold-500"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="newPassword" className="text-white">
                New Password
              </Label>
              <Input
                id="newPassword"
                name="newPassword"
                type="password"
                value={formData.newPassword}
                onChange={handleChange}
                className="col-span-3 bg-main_black text-white border-gold-500"
              />
            </div>
            <div className="flex flex-col gap-2 mb-2">
              <Label htmlFor="confirmPassword" className="text-white">
                Confirm Password
              </Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="col-span-3 bg-main_black text-white border-gold-500"
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <h2 className="relative text-4xl font-restora_light mb-8 pb-2 text-white">
        Personal Information
        <div className="h-[1px] w-[284px] bg-gold-500 absolute bottom-0" />
      </h2>

      <div className="space-y-3">
        <div>
          <label className="block text-base mb-2 text-white">Name</label>
          <div className="flex gap-4 relative">
            <input
              type="text"
              className="flex-1 h-[54px] bg-main_black border outline-none p-3 placeholder:text-base placeholder:font-jakarta border-gold-500 text-white"
              placeholder={`${formData.firstName} ${formData.lastName}`}
              readOnly
            />
            <button
              className="bg-gold-500 hover:bg-gold-500/90 text-white w-[102px] h-[42px] absolute right-1.5 top-1.5"
              onClick={() => handleEdit("name")}
            >
              Edit
            </button>
          </div>
        </div>
        <div>
          <label className="block text-base mb-2 text-white">Email</label>
          <div className="flex gap-4 relative">
            <input
              type="text"
              className="flex-1 h-[54px] bg-main_black border outline-none p-3 placeholder:text-base placeholder:font-jakarta border-gold-500 text-white"
              placeholder={formData.email}
              readOnly
            />
            <button
              className="bg-gold-500 hover:bg-gold-500/90 text-white w-[102px] h-[42px] absolute right-1.5 top-1.5"
              onClick={() => handleEdit("email")}
            >
              Edit
            </button>
          </div>
        </div>
        <div>
          <label className="block text-base mb-2 text-white">
            Phone Number
          </label>
          <div className="flex gap-4 relative">
            <input
              type="text"
              className="flex-1 h-[54px] bg-main_black border outline-none p-3 placeholder:text-base placeholder:font-jakarta border-gold-500 text-white"
              placeholder={formData.phone}
              readOnly
            />
            <button
              className="bg-gold-500 hover:bg-gold-500/90 text-white w-[102px] h-[42px] absolute right-1.5 top-1.5"
              onClick={() => handleEdit("phone")}
            >
              Edit
            </button>
          </div>
        </div>
        <div>
          <label className="block text-base mb-2 text-white">Password</label>
          <div className="flex gap-4 relative">
            <input
              type="password"
              className="flex-1 h-[54px] bg-main_black border outline-none p-3 placeholder:text-base placeholder:font-jakarta border-gold-500 text-white"
              placeholder="••••••••••"
              readOnly
            />
            <button
              className="bg-gold-500 hover:bg-gold-500/90 text-white w-[102px] h-[42px] absolute right-1.5 top-1.5"
              onClick={() => handleEdit("password")}
            >
              Edit
            </button>
          </div>
        </div>
      </div>

      <EditDialog
        isOpen={isDialogOpen}
        onClose={handleClose}
        title={`${editingField}`}
        onSave={handleSave}
      >
        {renderDialogContent()}
      </EditDialog>
    </div>
  );
}
