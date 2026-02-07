# Configuración de Variables de Entorno en Vercel

Para que la funcionalidad de envío de correos funcione en el entorno de **Preview** (la rama `dev`), es **CRÍTICO** que las variables de entorno estén configuradas para este entorno en Vercel.

"Charge" (Cargar) las variables en Preview:

1.  Ve a tu proyecto en el **Dashboard de Vercel**.
2.  Navega a **Settings** > **Environment Variables**.
3.  Verifica (o agrega) las siguientes variables y asegúrate de que la casilla **Preview** esté marcada para cada una de ellas:

| Variable | Valor (Ejemplo/Referencia) | Entornos Requeridos |
| :--- | :--- | :--- |
| `SUPABASE_URL` | `https://bawxawmhjsllrmtadtmd.supabase.co` | Production, **Preview**, Development |
| `SUPABASE_ANON_KEY` | *(Tu clave anon pública)* | Production, **Preview**, Development |
| `RESEND_API_KEY` | `re_Iadqs...` | Production, **Preview**, Development |

## ¿Por qué es necesario?
Por defecto, a veces las variables solo se agregan a "Production". Si no están activas para "Preview", la función `api/request-assessment` fallará con un error de configuración ("Missing environment variables") cuando pruebes desde la rama `dev`.

## Verificación
Una vez configuradas:
1.  Es posible que necesites **Redesplegar** (Redeploy) el último commit en Vercel para que los cambios surtan efecto.
    - Ve a la pestaña **Deployments**.
    - Busca el último deployment de `dev`.
    - Haz clic en los tres puntos (...) y selecciona **Redeploy**.
2.  Prueba el formulario nuevamente en la URL de Preview.
