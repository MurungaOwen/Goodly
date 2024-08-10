import { SignupForm } from "@/components/Auth/Forms";
export default function SignupPage(){
    return (
        <div className="my-10 block md:flex mx-2 md:mx-auto">
            <div className="image_section hidden md:block md:col-span-6">
                <img src="https://pittnews.com/wp-content/uploads/2022/02/Image-from-iOS-1-900x900.jpg" className="object-cover" alt=""  />
            </div>
            <div className="form_section justify-center md:col-span-6">
                <SignupForm />
            </div>
            
        </div>
    )
}