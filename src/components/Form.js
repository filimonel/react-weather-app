import "./../styles/Form.scss";

const Form = () => {
  return (
      <>
        <form  class="flex-form">
            <label for="from">
                <i class="ion-location"></i>
            </label>
            <input type="search" placeholder="Where do you want to go?" />
            <input type="submit" value="Go" />
        </form>
      </>
  )
};

export default Form;
