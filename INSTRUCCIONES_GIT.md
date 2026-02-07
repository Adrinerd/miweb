# INSTRUCCIONES DE FLUJO DE TRABAJO (GITFLOW)

Este proyecto sigue un estricto flujo de trabajo GitFlow para garantizar la calidad y estabilidad del código en producción.

## 1. Reglas Generales

- **Rama Principal (`main`)**: Contiene únicamente código estable y probado. **Está prohibido hacer commits directos (push) a esta rama.**
- **Rama de Desarrollo (`dev`)**: Es la rama de integración donde se envían todos los cambios, nuevas características y correcciones.

## 2. Flujo de Trabajo para Antigravity

1.  **Desarrollo**: Todos los cambios de código realizados por el asistente (Antigravity) se enviarán exclusivamente a la rama `dev`.
2.  **Revisión (Preview)**: Cada vez que se hace un push a `dev`, Vercel generará una URL de "Preview". Esta URL debe utilizarse para verificar que los cambios funcionan correctamente.
3.  **Paso a Producción**: Una vez validados los cambios en la rama `dev`, el usuario deberá crear un **Pull Request (PR)** desde `dev` hacia `main` en GitHub.
    - El PR permite una revisión final del código antes de que toque producción.
    - Al aprobar y fusionar (merge) el PR, Vercel desplegará automáticamente la nueva versión en producción.

## 3. Comandos Útiles

- Cambiar a la rama de desarrollo: `git checkout dev`
- Enviar cambios: `git push origin dev`

---
*Este archivo ha sido generado automáticamente por Antigravity para documentar los estándares del repositorio.*
