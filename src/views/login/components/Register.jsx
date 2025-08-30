import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import { useState } from "react";

const schema = yup.object({
    email: yup.string().email("Por favor ingresa un formato correcto: email.@email.com").required(),
    password: yup.string().required().min(8, "Deben ser minimo 8 caracteres")
        .matches(/[A-Z]/).matches(/[a-z]/).matches(/[0-9]/),
    confirm_Password: yup.string().oneOf([yup.ref("password")])
})

export const Register = () => {

    const { register, handleSubmit, formState: { errors }, } = useForm({
        resolver: yupResolver(schema),
    });

    const [success, setSuccess] = useState(false);


    const onSubmitForm = (datos) => {
        console.log(datos);
        setSuccess(true); 
        setTimeout(() => setSuccess(false), 3000); 
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: "#121212" }}>
            <div className="card p-4 shadow-lg" style={{ width: "400px", backgroundColor: "#1c1c1c", borderRadius: "12px" }}>

                <h2 className="text-center text-white mb-4">Crear Cuenta</h2>

                {/* ALERTA DE ÉXITO */}
                {success && (
                    <div className="alert alert-success py-2" role="alert">
                        Datos validados correctamente ✅
                    </div>
                )}

                <form onSubmit={handleSubmit(onSubmitForm)}>
                    <label className="form-label text-white">Email</label>
                    <input className="form-control bg-dark text-white border-secondary" type="email" {...register('email')} />
                    {errors.email && (<p className="text-danger small">{errors.email.message}</p>)}

                    <label className="form-label text-white">Password</label>
                    <input className="form-control bg-dark text-white border-secondary" type="password" {...register('password')} />
                    {errors.password && (<p className="text-danger small">{errors.password.message}</p>)}

                    <label className="form-label text-white">Confirm Password</label>
                    <input className="form-control bg-dark text-white border-secondary" type="password" {...register('confirm_Password')} />
                    {errors.confirm_Password && (<p className="text-danger small">{errors.confirm_Password.message}</p>)}

                    <button className="btn btn-success w-100 fw-bold mt-3">Registrarse</button>
                </form>
            </div>
        </div>

    )
}

