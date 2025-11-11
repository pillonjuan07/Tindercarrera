SECCIÓN 1: Importaciones 📚

___________________________________________________

javascriptimport React from 'react';
import { ArrowLeft } from 'lucide-react';
import '../styles/Test.css';

__________________________________________________

¿Qué hace?

-Importa React
-Importa ícono ArrowLeft: Flecha hacia la izquierda (botón volver)
-Importa estilos del test


SECCIÓN 2: Props del Componente 🎯

javascriptfunction Test({ currentQuestion, questions, handleAnswer, goBack }) {
Props que recibe:

-currentQuestion: Número (índice) de la pregunta actual (ej: 0, 1, 2...)
-questions: Array completo de todas las preguntas del test
-handleAnswer: Función que se ejecuta cuando el usuario elige una opción
-goBack: Función para retroceder a la pregunta anterior

Estructura esperada de questions:

_______________________________________________________________________

javascriptquestions = [
  {
    question: "¿Te gusta trabajar con números y análisis de datos?",
    options: [
      { text: "Sí, me encanta", value: "tech" },
      { text: "No me interesa", value: "arts" }
    ]
  },
  // ... más preguntas
]

______________________________________________________________________

SECCIÓN 3: Cálculo de Progreso 📊

javascriptconst progress = ((currentQuestion + 1) / questions.length) * 100;

¿Qué hace?

-Calcula el porcentaje de progreso del test.

-Desglose de la fórmula:
    -javascript// Ejemplo con 20 preguntas totales
    -questions.length = 20

    // Pregunta 1 (índice 0):
    currentQuestion = 0
    (0 + 1) / 20 * 100 = 5%

    // Pregunta 5 (índice 4):
    currentQuestion = 4
    (4 + 1) / 20 * 100 = 25%

    // Pregunta 10 (índice 9):
    currentQuestion = 9
    (9 + 1) / 20 * 100 = 50%

    // Última pregunta (índice 19):
    currentQuestion = 19
    (19 + 1) / 20 * 100 = 100%
    ¿Por qué currentQuestion + 1?

Los índices empiezan en 0
Pero queremos mostrar "Pregunta 1" (no "Pregunta 0")
El progreso debe reflejar preguntas completadas + actual


SECCIÓN 4: Barra de Progreso - Info 📈

____________________________________________________________________

javascriptreturn (
  <section className="test-container">
    <div className="test-card">
      <div className="test-progress-container">
        <div className="test-progress-info">
          <span className="test-progress-text">
            Pregunta {currentQuestion + 1} de {questions.length}
          </span>
          <span className="test-progress-percent">
            {Math.round(progress)}%
          </span>
        </div>
_________________________________________________________________

¿Qué hace?

Texto de progreso:
javascriptPregunta {currentQuestion + 1} de {questions.length}

Muestra: "Pregunta 3 de 20"
Información contextual para el usuario

Porcentaje redondeado:
javascript{Math.round(progress)}%
```
- `Math.round()`: Redondea decimales al entero más cercano
- Ejemplos:
  - `5.5%` → `6%`
  - `33.333%` → `33%`
  - `99.9%` → `100%`

**Layout típico:**
```
┌─────────────────────────────────┐
│ Pregunta 5 de 20          25%   │
└─────────────────────────────────┘

SECCIÓN 5: Barra de Progreso Visual 🎨

_______________________________________________________

javascript<div className="test-progress-bar">
  <div
    className="test-progress-fill"
    style={{ width: `${progress}%` }}
  />
</div>

______________________________________________________

¿Qué hace?

Contenedor externo (test-progress-bar): Fondo gris/vacío
Barra de relleno (test-progress-fill): Color que indica progreso

Estilo inline dinámico:
javascriptstyle={{ width: `${progress}%` }}
```
- Usa template literals para insertar el valor
- El ancho cambia según el progreso
- Ejemplos:
  - Pregunta 1: `width: 5%`
  - Pregunta 10: `width: 50%`
  - Pregunta 20: `width: 100%`

**Visualización:**
```
Pregunta 1:  [▓░░░░░░░░░░░░░░░░░░░] 5%
Pregunta 10: [▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░] 50%
Pregunta 20: [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 100%

SECCIÓN 6: Pregunta Actual ❓

______________________________________________

javascript<h3 className="test-question">
  {questions[currentQuestion].question}
</h3>

______________________________________________

¿Qué hace?

Accede al array questions con el índice currentQuestion
Muestra solo la pregunta actual
Ejemplos:

questions[0].question → Primera pregunta
questions[5].question → Sexta pregunta



Dato importante: Este componente NO itera sobre todas las preguntas, solo muestra UNA.

SECCIÓN 7: Opciones de Respuesta ✅

___________________________________________________________________

javascript<div className="test-options">
  {questions[currentQuestion].options.map((option, index) => (
    <button
      key={index}
      onClick={() => handleAnswer(option)}
      className="test-option"
    >
      <span>{option.text}</span>
    </button>
  ))}
</div>

_________________________________________________________________

¿Qué hace?

Acceso a opciones:
javascriptquestions[currentQuestion].options

Obtiene el array de opciones de la pregunta actual
Ejemplo: [{text: "Sí", value: "tech"}, {text: "No", value: "arts"}]

Mapeo de botones:
javascript.map((option, index) => ...)

Crea un botón por cada opción
key={index}: Identificador único

Handler de respuesta:
javascriptonClick={() => handleAnswer(option)}
```
- Arrow function necesaria para no ejecutar inmediatamente
- Pasa el **objeto completo** `option` (no solo el texto)
- El padre recibe: `{text: "Sí", value: "tech"}`

**Estructura visual:**
```
┌─────────────────────────────────┐
│ ¿Te gusta trabajar con números? │
├─────────────────────────────────┤
│  [ Sí, me encanta ]             │
│  [ Me es indiferente ]          │
│  [ No me interesa ]             │
└─────────────────────────────────┘

SECCIÓN 8: Botón Volver Condicional ◀️

________________________________________________

javascript{currentQuestion > 0 && (
  <button
    onClick={goBack}
    className="test-back-button"
  >
    <ArrowLeft size={20} /> Volver
  </button>
)}

_______________________________________________

¿Qué hace?

Renderizado condicional con &&:
javascriptcurrentQuestion > 0 && <Componente />

Solo renderiza si currentQuestion es mayor que 0
Primera pregunta (índice 0): NO muestra botón ❌
Segunda pregunta en adelante (índice 1+): SÍ muestra botón ✅

¿Por qué esta lógica?

javascript// Pregunta 1 (índice 0):
currentQuestion = 0
0 > 0 = false → No hay botón (correcto, no hay pregunta anterior)

// Pregunta 2 (índice 1):
currentQuestion = 1
1 > 0 = true → Muestra botón (puede volver a pregunta 1)

// Pregunta 20 (índice 19):
currentQuestion = 19
19 > 0 = true → Muestra botón
Contenido del botón:

Ícono ArrowLeft (20px) + texto "Volver"
Ejecuta goBack() al hacer clic

Patrón UX: Previene errores - no puedes volver si estás en la primera pregunta.

SECCIÓN 9: Cierre y Exportación 📦
javascript      </div>
    </section>
  );
}

export default Test;
```
**¿Qué hace?**
- Cierra todos los elementos JSX
- Exporta el componente

---

## Flujo de Interacción del Test 🔄

### **Navegación Típica:**
```
1. Usuario inicia test (currentQuestion = 0)
   ┌───────────────────────────────┐
   │ Pregunta 1 de 20         5%   │
   │ ▓░░░░░░░░░░░░░░░░░░░░░░░     │
   │                               │
   │ ¿Te gusta la programación?    │
   │  [ Sí ]  [ No ]  [ Tal vez ]  │
   │                               │
   │ (Sin botón volver)            │
   └───────────────────────────────┘

2. Usuario elige "Sí" → handleAnswer({text: "Sí", value: "tech"})
   - Padre procesa respuesta
   - Padre incrementa currentQuestion (0 → 1)
   - Componente se re-renderiza

3. Segunda pregunta (currentQuestion = 1)
   ┌───────────────────────────────┐
   │ Pregunta 2 de 20        10%   │
   │ ▓▓░░░░░░░░░░░░░░░░░░░░░░      │
   │                               │
   │ ¿Te gusta trabajar en equipo? │
   │  [ Sí ]  [ No ]               │
   │                               │
   │ ← Volver                      │
   └───────────────────────────────┘

4. Usuario hace clic en "Volver" → goBack()
   - Padre decrementa currentQuestion (1 → 0)
   - Vuelve a pregunta 1

5. Proceso se repite hasta llegar a pregunta 20
```

---

## Flujo Visual Completo 🎨
```
╔═══════════════════════════════════╗
║  Pregunta 5 de 20          25%    ║
║  ▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░        ║
╠═══════════════════════════════════╣
║                                   ║
║  ¿Disfrutas resolver problemas    ║
║  complejos y pensar en            ║
║  soluciones creativas?            ║
║                                   ║
║  ┌─────────────────────────────┐ ║
║  │  Definitivamente sí         │ ║
║  └─────────────────────────────┘ ║
║                                   ║
║  ┌─────────────────────────────┐ ║
║  │  A veces                    │ ║
║  └─────────────────────────────┘ ║
║                                   ║
║  ┌─────────────────────────────┐ ║
║  │  Prefiero tareas rutinarias │ ║
║  └─────────────────────────────┘ ║
║                                   ║
║  ┌─────────────────────────────┐ ║
║  │  No me gusta               │ ║
║  └─────────────────────────────┘ ║
║                                   ║
║  ← Volver                         ║
║                                   ║
╚═══════════════════════════════════╝