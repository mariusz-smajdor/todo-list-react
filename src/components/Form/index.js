import "./style.css"

const Form = () => {
  return (
    <form className="form">
      <input
        className="form__field"
        type="text"
        placeholder="Co jest do zrobienia?"
      />
      <button className="form__button" type="submit">
        Dodaj zadanie
      </button>
    </form>
  )
}

export default Form
