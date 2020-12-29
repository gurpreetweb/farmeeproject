import React, { Component, lazy, Suspense } from "react";
import { Bar, Line } from "react-chartjs-2";
import { Scrollbars } from "react-custom-scrollbars";
import Closebtn from "../../assets/img/close-btn.svg";
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table,
  Container,
  ListGroup,
  ListGroupItem,
  Media,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupText,
  Breadcrumb,
  BreadcrumbItem,
  UncontrolledTooltip,
} from "reactstrap";
import Pricon from "../../assets/img/student/personal-icon.svg";
import Flagicon from "../../assets/img/student/flag-my-icon.svg";
import $ from "jquery";
//import Programlist from "./../Programlist/Programlist";
import config from "../../config.json";
import deakinlogo from "../../assets/img/university/deakin_logo.jpg";
import bargraph from "../../assets/img/university/bar_graph.svg";
import contlogo from "../../assets/img/university/australia_circle_flag.svg";
import favourites from "../../assets/img/university/favourites.svg";
import heart from "../../assets/img/university/heart.svg";
import heart2 from "../../assets/img/university/red-heart.svg";
import eyeicon from "../../assets/img/university/view_simple.svg";
import rating from "../../assets/img/university/rating.svg";
import backarrow from "../../assets/img/university/back_arrow.svg";
import { Link, Redirect } from "react-router-dom";
import searchorange from "../../assets/img/search-orange-icon.svg";
import Homeicon from "../../assets/img/university/home.svg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FilterStudent1 from "../../views/FilterStudent/FilterStudent1";
import Closeicon from "../../assets/img/close-btn.svg";
import Infoicon from "../../assets/img/student/info-icon.svg";

//import $ from "jquery";
window.jQuery = $;
require("jquery-slimscroll/jquery.slimscroll");

var baseurl = `${config.baseurl}/`;
var student_url = `${config.student_url}`;
function submitStore(contentType, data, setResponse, path) {
  axios({
    url: baseurl + `store_wishlist`,
    method: "POST",
    data: data,
    headers: {
      "Content-Type": contentType,
    },
  })
    .then((response) => {
      setResponse(response.data);
    })
    .catch((error) => {
      setResponse("error");
    });
}

class Institutelist extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      currentPage: 1,
      todosPerPage: 2,
      filteredTodos: [],
      checkeliesuccess: false,
      // showStore:false,
      showmore: false,
      uniid: "",
      country: [],
      courses: [],
      course_name: "",
      studentselectcountry: "",
      studentselectcourse: "",
      errors: {},
      searchshow: true,
      selectprogram: 1,
      totalcount: "",
      failuremessage: "",
      eligiblesuccess: false,
      eligiblefailure: false,
      large: false,

      selectcourse: "",
      disabled: false,
      checkcompletedprofile: false,
      university: "",
      selectcountry: "",
      coursename: "",
      universitylist: [],
      filtereduniversitylist: [],
      filteredCourses: [],
      currentPage1: 1,
      universitylistPerPage: 6,
      searchsuggestion: [],
      searchsuggestionprog: [],
      searchsuggestionuniversity: [],

      //searchtextprogram:''
      search: false,
      searchedValue: [],
      visible: false,
      formData: new FormData(),

      deleteid: "",
      unvid: "",
      uncourseid: "",
      coursefavids: [],
      getstorewishlistdata: [],
      applicationID: "",
      tooltipOpen: false,
      countryname:
        localStorage.getItem("country_name") !== null
          ? localStorage.getItem("country_name").toString()
          : "",
    };
    this.toggle = this.toggle.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSubmit1 = this.onSubmit1.bind(this);
    this.toggleLarge = this.toggleLarge.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClick1 = this.handleClick1.bind(this);
    this.toggleSuccess = this.toggleSuccess.bind(this);
    this.toggleFailure = this.toggleFailure.bind(this);
    this.handleCoursenameChange = this.handleCoursenameChange.bind(this);

    console.log("Change applied");

    axios.get(baseurl + "get_country").then((response) => {
      console.log(response);
      this.setState({
        country: response.data,
      });
    });

    //for non complete profile
    axios
      .get(
        baseurl + "checkcompletedprofile/" + localStorage.getItem("studentid")
      )
      .then((response) => {
        if (response.data.status_code == 100) {
          this.setState({ checkcompletedprofile: true });
        }
      });

    axios.get(baseurl + "get_mainlevelcourse").then((response) => {
      // console.log("Main Course"+JSON.stringify(response));
      //this.setState({data: [...json]});
      console.log("courses-->", response.data);
      this.setState({
        courses: response.data,
      });
    });
  }

  /*    componentDidMount() {
    axios.get('https://formeeadmin.bicsglobal.com/studentuniversitylist').then(response => 
		{
      		console.log(response);
			//alert(response.data.about[0].id);
      		this.setState({
				todos: response.data,
			
      		});
    	})
  }   */

  //for institute validate and save start

  handleSelectcountryChange = (event) => {
    this.setState({ selectcountry: event.target.value });
  };
  handleSelectcourseChange = (event) => {
    this.setState({ selectcourse: event.target.value });
  };
  handleUniversityChange = (event) => {
    //this.setState({university: event.target.value});
    const university = event.target.value;

    if (university.length >= 3) {
      axios
        .get(baseurl + "autocompleteuniversity/" + university)
        .then((response) => {
          console.log("Auto Complete" + university);

          this.setState({
            searchsuggestionuniversity: response.data,
            university: university,
          });
        });
    } else {
      this.setState({
        //searchsuggestionuniversity: [],
        university: event.target.value,
      });
    }
  };

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen,
    });
  }

  renderSuggestionsuniversityname = () => {
    let { searchsuggestionuniversity } = this.state;

    return (
      <Scrollbars style={{ height: 100 }}>
        <ul style={{ backgroundColor: "white" }} className="searchdropdown">
          {searchsuggestionuniversity.map((item, index) => (
            <li key={index} onClick={() => this.selectedTextuniversity(item)}>
              {item}
            </li>
          ))}
        </ul>
      </Scrollbars>
    );
  };

  selectedTextuniversity(value) {
    this.setState({
      searchsuggestionuniversity: [],
      university: value,
    });
  }

  handleUnicoursenameChange = (event) => {
    const value = event.target.value;
    //alert(value);
    if (value.length >= 3) {
      //alert(value.length);
      axios.get(baseurl + "autocompletecourse/" + value).then((response) => {
        //console.log(response.data);
        this.setState({
          searchsuggestion: response.data,
          coursename: value,
        });
        // }, 200);
      });
    } else {
      this.setState({ coursename: event.target.value });
    }

    //this.setState({coursename: event.target.value});
  };

  //for dropdown based on search in inistitute

  renderSuggestions = () => {
    let { searchsuggestion } = this.state;

    return (
      <Scrollbars style={{ height: 100 }}>
        <ul style={{ backgroundColor: "white" }} className="searchdropdown">
          {searchsuggestion.map((item, index) => (
            <li key={index} onClick={() => this.selectedText(item)}>
              {item}
            </li>
          ))}
        </ul>
      </Scrollbars>
    );
  };

  //filter search value
  componentDidMount() {
    this.filterHandler();
    this.getstorewishlist();
    $(".select-bbox select").each(function () {
      var $this = $(this),
        numberOfOptions = $(this).children("option").length;

      $this.addClass("select-hidden");
      $this.wrap('<div class="select"></div>');
      $this.after('<div class="select-styled"></div>');

      var $styledSelect = $this.next("div.select-styled");
      $styledSelect.text($this.children("option").eq(0).text());

      var $list = $("<div />", {
        class: "select-options",
      }).insertAfter($styledSelect);

      var $list2 = $("<ul />", {
        class: "select-options2",
      }).appendTo($list);

      for (var i = 0; i < numberOfOptions; i++) {
        $("<li />", {
          text: $this.children("option").eq(i).text(),
          rel: $this.children("option").eq(i).val(),
        }).appendTo($list2);
      }

      var $listItems = $list2.children("li");

      $styledSelect.click(function (e) {
        e.stopPropagation();
        $("div.select-styled.active")
          .not(this)
          .each(function () {
            $(this).removeClass("active").next("div.select-options").hide();
          });
        $(this).toggleClass("active").next("div.select-options").toggle();
      });

      $listItems.click(function () {
        //e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass("active");
        $this.val($(this).attr("rel"));
        $list.hide();
        //alert($this.val());
        //countryid = $this.val();
        //this.handleSelectcountryChange();
        //alert(countryid);
        //this.setState({selectcountry:"hi"});
        localStorage.setItem("selectcountry", $this.val());
        //alert($this.val());
      });

      $(document).click(function () {
        $styledSelect.removeClass("active");
        $list.hide();
      });

      $($list2).slimScroll({
        size: "10px",
        height: "200px",
        color: "#000",
        allowPageScroll: true,
        alwaysVisible: true,
        railVisible: true,
        railDraggable: true,
        railColor: "#fff",
        railOpacity: 0.3,
      });
    });

    $(".select-bbox1 select").each(function () {
      var $this = $(this),
        numberOfOptions = $(this).children("option").length;

      $this.addClass("select-hidden");
      $this.wrap('<div class="select"></div>');
      $this.after('<div class="select-styled"></div>');

      var $styledSelect = $this.next("div.select-styled");
      $styledSelect.text($this.children("option").eq(0).text());

      var $list = $("<div />", {
        class: "select-options",
      }).insertAfter($styledSelect);

      var $list2 = $("<ul />", {
        class: "select-options2",
      }).appendTo($list);

      for (var i = 0; i < numberOfOptions; i++) {
        $("<li />", {
          text: $this.children("option").eq(i).text(),
          rel: $this.children("option").eq(i).val(),
        }).appendTo($list2);
      }

      var $listItems = $list2.children("li");

      $styledSelect.click(function (e) {
        e.stopPropagation();
        $("div.select-styled.active")
          .not(this)
          .each(function () {
            $(this).removeClass("active").next("div.select-options").hide();
          });
        $(this).toggleClass("active").next("div.select-options").toggle();
      });

      $listItems.click(function () {
        //e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass("active");
        $this.val($(this).attr("rel"));
        $list.hide();
        //alert($this.val());
        //countryid = $this.val();
        //this.handleSelectcountryChange();
        //alert(countryid);
        //this.setState({selectcountry:"hi"});
        localStorage.setItem("selectcourse", $this.val());
        //alert($this.val());
      });

      $(document).click(function () {
        $styledSelect.removeClass("active");
        $list.hide();
      });

      $($list2).slimScroll({
        size: "10px",
        height: "200px",
        color: "#000",
        allowPageScroll: true,
        alwaysVisible: true,
        railVisible: true,
        railDraggable: true,
        railColor: "#fff",
        railOpacity: 0.3,
      });
    });
  }

  storewishlist = () => {
    this.state.formData.append("student_id", localStorage.getItem("studentid"));
    this.state.formData.append("university_id", this.state.unvid);
    this.state.formData.append("course_id", this.state.uncourseid);

    submitStore(
      "form-data",
      this.state.formData,
      (msg) => {
        toast.success("Favourite Saved Successfully");
        setTimeout(function () {}, 3000);
        this.getstorewishlist();
      },
      "student"
    );
  };

  getstorewishlist = () => {
    axios
      .get(baseurl + "getWishlist/" + localStorage.getItem("studentid"))
      .then((response) => {
        // console.log('getstorewishlist123123', response.data.result[0].university_id);
        this.setState({ getstorewishlistdata: response.data.result });
      });
  };

  getIndex = (value, arr, prop) => {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i][prop] === value) {
        return value;
      }
    }
    return -1; //to handle the case where the value doesn't exist
  };

  removestorewishlist = (data) => {
    for (var i = 0; i < this.state.getstorewishlistdata.length; i++) {
      if (this.state.getstorewishlistdata[i].course_id === data) {
        const deleteid = this.state.getstorewishlistdata[i].id;
        // console.log('jksdnaksdnakd', deleteid);
        axios.get(baseurl + "deleteWishlist/" + deleteid).then((response) => {
          toast.success("Favourite Removed Successfully");
          setTimeout(function () {}, 3000);
          this.getstorewishlist();
        });
      }
    }
  };

  handleFav = (data) => {
    console.log("click data", data);
    this.state.formData.append("student_id", localStorage.getItem("studentid"));
    this.state.formData.append("university_id", data.unvid);
    this.state.formData.append("course_id", data.uncourseid);

    submitStore(
      "form-data",
      this.state.formData,
      (msg) => {
        toast.success("Favourite Saved Successfully");
        setTimeout(function () {}, 3000);
        this.getstorewishlist();
      },
      "student"
    );
  };

  searchedValue1 = (alluniversities, allcourse, allProgram) => {
    let {
      universitylist,
      filtereduniversitylist,
      todos,
      filteredTodos,
    } = this.state;
    const coursearr = [...allcourse];

    //console.log("non modified university", alluniversities)

    // if (universitylist.length > 0) {
    // 	filtereduniversitylist = universitylist.filter(university=>{
    // 		for(let i=0; i < alluniversities.length; i++) {
    // 			return alluniversities[i].university_id == university.id
    // 		}
    // 	})
    // } else {
    filtereduniversitylist = alluniversities;
    // }

    // Fiter Courses
    // const filteredCourses = coursearr.filter(course=>{
    // 	for(let i=0; i < filtereduniversitylist.length; i++) {
    // 		if(universitylist.length > 0) return course.university_id == filtereduniversitylist[i].id
    // 		else return course.university_id == filtereduniversitylist[i].university_id
    // 	}
    // })
    const filteredCourses = [...coursearr];

    console.log(filtereduniversitylist);

    filteredTodos = allProgram;

    console.log("filtered university", filtereduniversitylist);

    console.log("filtered programs", filteredTodos);

    this.setState({ filtereduniversitylist, filteredCourses, filteredTodos });
  };

  searchedValue = (institutelist, allProgram) => {
    let {
      universitylist,
      filtereduniversitylist,
      todos,
      filteredTodos,
    } = this.state;
    filtereduniversitylist = institutelist;

    filteredTodos = allProgram;

    console.log("filtered programs", filteredTodos);

    this.setState({ filtereduniversitylist, filteredTodos });
  };

  selectedText(value) {
    this.setState({
      searchsuggestion: [],
      coursename: value,
    });
  }

  validate1 = () => {
    const errors = {};
    var universitycountry = $("#selectcountry option:selected").text();
    localStorage.setItem("universitycountry", universitycountry);
    var universitycourse = $("#coursename").val();
    localStorage.setItem("universitycourse", universitycourse);
    var universityname = $("#university_name").val();
    localStorage.setItem("universityname", universityname);
    var universityeducation = $("#selectcourse option:selected").text();
    localStorage.setItem("universityeducation", universityeducation);

    // if(this.state.university === '' || (!this.state.university ))
    // {
    // errors.university = 'This is required';
    // }
    if (this.state.coursename === "" || !this.state.coursename) {
      errors.coursename = "Course name is required";
    }
    this.setState({ errors });
    return Object.keys(errors).length === 0 ? null : errors;
  };

  onSubmit1 = (e) => {
    e.preventDefault();

    // const errors = this.validate1();
    // this.setState({ errors });
    // if (errors) return;

    const data = {
      selectcountry: this.state.selectcountry,
      selectcourse: this.state.selectcourse,
      university: this.state.university,
      coursename: this.state.coursename,
    };
    console.log(data);

    const post = axios
      .post(baseurl + "searchinstitute", data)
      .then((response) => {
        this.setState({
          universitylist: response.data,
          filtereduniversitylist: response.data,
          currentPage1: 1,
        });
        toast.success("Records searched successfully");
      });
    this.setState({ errors: "" });
  };

  //for institute validate and save end

  handleStudentselectcountryChange = (event) => {
    this.state.country.map((item) => {
      if (item.id.toString() === event.target.value) {
        this.setState({ countryname: item.country_name });
      }
    });
    this.setState({ studentselectcountry: event.target.value });
  };

  handleStudentselectcourseChange = (event) => {
    this.setState({ studentselectcourse: event.target.value });
  };

  handleCoursenameChange = (event) => {
    const value = event.target.value;
    if (value.length >= 3) {
      //alert(value);

      axios.get(baseurl + "autocompletecourse/" + value).then((response) => {
        //console.log(response.data);
        this.setState({
          searchsuggestionprog: response.data,
          course_name: value,
        });
      });
    } else {
      this.setState({
        //searchsuggestionprog: [],
        course_name: event.target.value,
      });
    }
  };

  //for dropdown based on search in inistitute

  renderSuggestionsprogram = () => {
    let { searchsuggestionprog } = this.state;
    // if (searchsuggestionprog.length === 0) {
    // 	return null;
    // }
    return (
      <Scrollbars style={{ height: 100 }}>
        <ul style={{ backgroundColor: "white" }} className="searchdropdown">
          {searchsuggestionprog.map((program, index) => (
            <li key={index} onClick={() => this.selectedTextpro(program)}>
              {program}
            </li>
          ))}
        </ul>
      </Scrollbars>
    );
  };

  selectedTextpro(value) {
    //alert(value);
    this.setState({
      searchsuggestionprog: [],
      course_name: value,
    });
  }

  validate = () => {
    const errors = {};

    /* var programcountry = $("#studentselectcountry option:selected" ).text();
		 localStorage.setItem('programcountry',programcountry);
		 var programcourse = $("#course_name").val();
		 var programeducation = $("#studentselectcourse" ).val();
		 localStorage.setItem('programcourse',programcourse);
		 localStorage.setItem('programeducation',programeducation);  */

    var universitycountry = $("#studentselectcountry option:selected").text();
    localStorage.setItem("universitycountry", universitycountry);
    var universitycourse = $("#course_name").val();
    localStorage.setItem("universitycourse", universitycourse);
    var universityeducation = $("#studentselectcourse option:selected").text();
    localStorage.setItem("universityeducation", universityeducation);

    if (this.state.course_name === "" || !this.state.course_name) {
      errors.course_name = "Course name is required";
    }
    this.setState({ errors });
    return Object.keys(errors).length === 0 ? null : errors;
  };
  filterHandler = () => {
    this.setState({ visible: this.state.visible != true });
  };

  selectprogram = (e) => {
    this.setState({ selectprogram: 2 });
    this.setState({ searchtext: "" });
    this.setState({ searchtextprogram: "" });
  };

  selectprogram1 = (e) => {
    this.setState({ selectprogram: 1 });
    this.setState({ searchtext: "" });
    this.setState({ searchtextprogram: "" });
  };

  closeall() {
    window.location.reload();
  }

  onSubmit = (e) => {
    e.preventDefault();
    debugger;

    // const errors = this.validate();
    // this.setState({ errors });
    // if (errors) return;
    this.setState({ searchshow: false });
    // if (this.state.studentselectcountry === "") {
    //   this.state.country.map((item) => {
    //     if (
    //       item.country_name.toString() ===
    //       localStorage.getItem("country_name").toString()
    //     ) {
    //       this.state.studentselectcountry = item.id;
    //     }
    //   });
    // }

    const data = {
      studentselectcountry:
        localStorage.getItem("selectcountry") !== undefined
          ? localStorage.getItem("selectcountry")
          : "",
      studentselectcourse:
        localStorage.getItem("selectcourse") !== undefined
          ? localStorage.getItem("selectcourse")
          : "",
      course_name: this.state.course_name,
      studentid: "",
    };
    console.log(data);

    const post = axios.post(baseurl + "search", data).then((response) => {
      console.log("Searched course", response.data);
      this.setState({
        todos: response.data.result,
        totalcount: response.data.message,
        currentPage: 1,
      });
      toast.success("Records searched successfully");
    });
    this.setState({ errors: "" });
  };

  handleChange = (param) => (e) => {
    //alert(param);

    const data = {
      studentselectcountry: this.state.studentselectcountry,
      studentselectcourse: this.state.studentselectcourse,
      course_name: this.state.course_name,
      seemoreid: param,
    };

    /* axios.get('https://formeeadmin.bicsglobal.com/studentuniversitylists/'+param).then(response => 
		{
      		console.log(response);
			//alert(response.data.about[0].id);
      		this.setState({
				uniid: param,
				todos: response.data,
			
      		});
    	})   */

    const post = axios
      .post(baseurl + "seemoresearch", data)
      .then((response) => {
        console.log(response.data);
        this.setState({
          todos: response.data,
          //currentPage:1,
          uniid: param,
        });
      });
  };

  //for check elegiblity

  handleChangeElegibilityprogram = (param) => (e) => {
    const data = {
      studentid: localStorage.getItem("studentid"),
      courseid: param,
    };

    axios.post(baseurl + "checkelegibility", data).then((response) => {
      if (response.data.status_code == 200) {
        this.setState({ eligiblesuccess: true });
      } else {
        this.setState({ failuremessage: response.data.message });
        this.setState({ eligiblefailure: true });
      }
    });
  };

  //for check elegiblity

  handleChangeApplyprogram = (data) => {
    //alert(data.unvid);
    localStorage.setItem("universityid", data.unvid);
    localStorage.setItem("selectcoursedraft", data.courseid);
    //alert(data.courseid);

    axios
      .get(
        baseurl +
          "applycheckeligibility/" +
          localStorage.getItem("studentid") +
          "/" +
          data.courseid
      )
      .then((response) => {
        //console.log(response.data);
        //this.setState({ applicationID : response.data.message })
        // localStorage.setItem('selectcoursedraft',response.data.message);
        window.location = "/#/applications";
      });
  };

  // handleChangeApplyprogram = param => e => {
  // alert(param);

  // }

  //end

  handleChangeuniversityid = (param) => (e) => {
    //alert(param);
    // this.props.history.push({
    // pathname: '/universityabout',
    // universityid: param // your data array of objects
    // })

    localStorage.setItem("selectuniversity", param);
    localStorage.setItem("selectcourse", "");
    window.location = "/#/universityabout";
  };

  handleChangeprogram = (param) => (e) => {
    var courseid = param;
    axios
      .get(baseurl + "getuniversityidwithcourseid/" + courseid)
      .then((response) => {
        var universityid = response.data;
        localStorage.setItem("selectuniversity", universityid);
        localStorage.setItem("selectcourse", courseid);
        window.location = "/#/universityabout";
      });
  };

  removeunicoursename = (e) => {
    this.setState({ coursename: "" });
  };
  removeunicoursename1 = (e) => {
    this.setState({ course_name: "" });
  };

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id),
    });
  }

  handleClick1(event) {
    this.setState({
      currentPage1: Number(event.target.id),
    });
  }

  toggleSuccess() {
    this.setState({
      eligiblesuccess: !this.state.eligiblesuccess,
    });
  }

  toggleEliSuccess() {
    this.setState({
      checkeliesuccess: !this.state.checkeliesuccess,
    });
  }
  OpenLogin = () => {
    window.open(student_url);
    this.closeall();
  };

  toggleLarge() {
    this.setState({
      large: !this.state.large,
      todos: [],
      filteredTodos: [],
    });
  }

  toggleFailure() {
    this.setState({
      eligiblefailure: !this.state.eligiblefailure,
    });
  }

  render() {
    //console.log(this.state.errors);
    const imgpath = `${config.baseurl}`;
    const {
      currentPage,
      todosPerPage,
      showStore,
      showmore,
      selectprogram,
      currentPage1,
      universitylistPerPage,
      searchtext,
      searchtextprogram,
      searchsuggestionprog,
      searchsuggestion,
      searchsuggestionuniversity,
    } = this.state;

    // Logic for displaying Filtered Program Course and Searched Program Course
    const todos =
      this.state.todos.length > 0 ? this.state.todos : this.state.filteredTodos;

    // Logic for displaying Filtered University list and Searched University list
    const universitylist =
      this.state.universitylist.length > 0
        ? this.state.universitylist
        : this.state.filtereduniversitylist;

    // Logic for displaying current todos
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

    // for (var i=0; i < currentTodos.length; i++) {
    // 	for (var j = 0; j < currentTodos[i].programcourses.length; j++) {

    // 	}
    // }
    // console.log('currentTodos',currentTodos)

    // Logic for displaying university list
    const indexOfLastTodo1 = currentPage1 * universitylistPerPage;
    const indexOfFirstTodo1 = indexOfLastTodo1 - universitylistPerPage;
    const currentList = universitylist.slice(
      indexOfFirstTodo1,
      indexOfLastTodo1
    );

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }

    // Logic for displaying page numbers
    const pageNumbers1 = [];
    for (
      let i = 1;
      i <= Math.ceil(universitylist.length / universitylistPerPage);
      i++
    ) {
      pageNumbers1.push(i);
    }

    const renderPageNumbers = pageNumbers.map((number) => {
      return (
        <button
          key={number}
          id={number}
          class="px-2 py-1"
          onClick={this.handleClick}
        >
          {number}
        </button>
      );
    });

    const renderPageNumbers1 = pageNumbers1.map((number) => {
      return (
        <button
          key={number}
          id={number}
          onClick={this.handleClick1}
          class="px-2 py-1"
        >
          {" "}
          {number}{" "}
        </button>
      );
    });

    const universitylists = currentList.map((universitylist, index) => {
      return (
        <div className="mx-0 col-md-4 uni-logo-list">
          <div className="col-md-12 content-block mb-4 cont-rgt">
            {universitylist.logo_image ? (
              <div className="col-md-8">
                {" "}
                <img src={imgpath + universitylist.logo_image} alt="" />{" "}
              </div>
            ) : (
              <div className="col-md-8">
                {" "}
                <img src={deakinlogo} alt="" />{" "}
              </div>
            )}
            <div
              className="my-3 pl-3 cont-rgt-grap"
              style={{ cursor: "pointer" }}
              onClick={this.handleChangeuniversityid(
                universitylist.university_id
                  ? universitylist.university_id
                  : universitylist.id
              )}
            >
              {" "}
              {universitylist.institute_name}{" "}
            </div>
            <div className="my-3 pl-3 cont-rgt-contry">
              {" "}
              <span className="pr-3">
                {" "}
                <img src={contlogo} alt="" />{" "}
                {universitylist.country || universitylist.country_name
                  ? universitylist.country
                    ? universitylist.country
                    : universitylist.country_name
                  : null}
              </span>
            </div>
          </div>
        </div>
      );
    });

    const prods = currentTodos.map((ub, index) => {
      const programcourses = ub.programcourses.map((programcourses, i) => {
        // {this.handleChangeElegibilityprogram(programcourses.id)}
        return (
          <div className="mb-3 mt-4 det-list">
            <table className="table list-items table-responsive-sm">
              <tbody>
                <tr>
                  <td>
                    <table
                      width="100%"
                      cellPadding="0"
                      cellSpacing="0"
                      border="0"
                    >
                      <tr>
                        <th colSpan="6">{programcourses.heading}</th>
                      </tr>
                      <tr>
                        <td className="width-170px">
                          <span>Study Type</span>
                          <br />
                          {programcourses.level_name}
                        </td>
                        <td>
                          <span>TUITION FEE</span>
                          <br />${programcourses.tution_fee}
                        </td>
                        <td>
                          <span>APPLICATION FEE</span>
                          <br />
                          {programcourses.application_fee}
                        </td>
                        <td>
                          <span>Campus</span>
                          <br />
                          Undergraduate
                        </td>
                        <td>
                          <div className="tab-btn">
                            {programcourses.status >= 1 ||
                            (programcourses.status == "apply" &&
                              programcourses.validreson == "") ? (
                              <span className="list-btn">
                                <Button
                                  className="btn btn-outline-primary"
                                  type="button"
                                  onClick={this.toggleSuccess}
                                >
                                  APPLY
                                </Button>
                              </span>
                            ) : programcourses.validreson ? (
                              <>
                                <p
                                  style={{ textAlign: "center" }}
                                  id="UncontrolledTooltipExample"
                                >
                                  {" "}
                                  <img
                                    style={{
                                      cursor: "default",
                                      marginBottom: "5px",
                                    }}
                                    src={Infoicon}
                                    alt="home-icon"
                                    className="uni-icon pr-2"
                                  />
                                </p>
                                <UncontrolledTooltip
                                  placement="right"
                                  target="UncontrolledTooltipExample"
                                >
                                  {programcourses.validreson}
                                </UncontrolledTooltip>
                              </>
                            ) : (
                              <span className="list-btn">
                                <Button
                                  className="btn btn-outline-primary"
                                  onClick={this.toggleSuccess}
                                  type="button"
                                >
                                  CHECK ELEGIBILITY
                                </Button>
                              </span>
                            )}
                            <span className="list-btn-outline">
                              <Button
                                className="btn btn-outline-primary"
                                onClick={this.handleChangeprogram(
                                  programcourses.id
                                )}
                                type="button"
                              >
                                VIEW MORE
                              </Button>
                            </span>
                          </div>
                          {/* {this.getIndex(
                            programcourses.id,
                            this.state.getstorewishlistdata,
                            "course_id"
                          ) == programcourses.id ? (
                            <span
                              className="list-fav pl-3"
                              onClick={() =>
                                this.removestorewishlist(programcourses.id)
                              }
                            >
                              <img src={heart2} alt="" />
                            </span>
                          ) : (
                            <span
                              className="list-fav pl-3"
                              onClick={() =>
                                this.handleFav({
                                  unvid: ub.id,
                                  uncourseid: programcourses.id,
                                })
                              }
                            >
                              <img src={heart} alt="" />
                            </span>
                          )} */}
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      });

      return (
        <div className="container stud-det-block bg-white">
          <div className="row mx-0 border-list">
            <div className="content-block row col-md-6">
              <div className="col-md-4">
                {" "}
                <img src={imgpath + ub.logo_image} alt="" />{" "}
              </div>
              <div className="col-md-8 px-0 cont-rgt">
                <h5 className="cont-rgt-head">
                  {ub.institute_name}{" "}
                  {/*<span className="heart-icon"> <img src={heart} alt="" /></span> */}{" "}
                </h5>
                <div className="my-3 cont-rgt-contry">
                  {" "}
                  <span className="pr-2">
                    {" "}
                    <img src={contlogo} alt="" />
                  </span>
                  {ub.country != null && ub.country != "" ? (
                    <span>{ub.country}</span>
                  ) : ub.country_name != null && ub.country_name != "" ? (
                    <span>{ub.country_name}</span>
                  ) : (
                    <span>Australia</span>
                  )}
                </div>
                <div className="my-3 cont-rgt-grap">
                  {" "}
                  <span className="pr-2">
                    {" "}
                    <img src={bargraph} alt="" />
                  </span>
                  The World Rankings : 0{" "}
                </div>
                <div className="my-3 row px-3 mx-0">
                  <div className="icon-align row">
                    <div className="pr-2">
                      {" "}
                      <img src={eyeicon} alt="" />
                    </div>
                    <div>
                      0<br />
                      Views
                    </div>
                  </div>
                  <div className="icon-align row">
                    <div className="pr-2">
                      {" "}
                      <img src={favourites} alt="" />
                    </div>
                    <div>
                      0<br />
                      Favourites
                    </div>
                  </div>
                  <div className="icon-align">
                    <div>
                      {" "}
                      <img src={rating} alt="" />
                    </div>
                    <div>Reviews (0)</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 see-ins-btn">
              <div className="icon-align">
                <div className="pr-1">
                  <Button
                    className="btn btn-outline-primary icon-align row mr-5"
                    onClick={this.handleChangeuniversityid(ub.id)}
                    type="button"
                  >
                    See Institute info
                  </Button>
                </div>
              </div>
            </div>
          </div>
          {programcourses}
          {this.state.uniid !== ub.id ? (
            <div className="text-center more-btn">
              {ub.programcount > 2 ? (
                <button onClick={this.handleChange(ub.id)}>
                  See more programs
                </button>
              ) : null}{" "}
            </div>
          ) : null}
        </div>
      );
    });

    return (
      <div className="foe-studen-container foe-institute-box foe-ins-container">
        {/* <Modal
          isOpen={this.state.eligiblesuccess}
          toggle={this.toggleSuccess}
          className={
            "modal-md " +
            "register-popup sucess-pop" +
            " " +
            this.props.className
          }
        >
          <ModalBody>
            <div className="modal_header mb-4">
              <span>
                &nbsp;&nbsp;&nbsp;
                <img
                  src={Closebtn}
                  alt="close-icon"
                  onClick={this.closeall}
                  className="uni-icon"
                />
              </span>
            </div>
            <div className="p-5 text-center">
              <div className="mb-5 sucess-text">
                Congratulations!. You are eligible to apply for this program.
              </div>
            </div>
          </ModalBody>
        </Modal> */}

        <Modal
          isOpen={this.state.eligiblesuccess}
          toggle={this.toggleSuccess}
          className={
            "modal-md " +
            "register-popup sucess-pop" +
            " " +
            this.props.className
          }
        >
          <ModalBody>
            <div className="modal_header mb-4">
              <span>
                &nbsp;&nbsp;&nbsp;
                <img
                  src={Closebtn}
                  alt="close-icon"
                  onClick={this.closeall}
                  className="uni-icon"
                />
              </span>
            </div>
            <div className="p-5 text-center">
              <div className="mb-5 sucess-text">
                Please Login or register yourself to Continue.
              </div>
              <a
                style={{ cursor: "pointer" }}
                href="#"
                onClick={this.OpenLogin}
              >
                Click here to Login
              </a>
            </div>
          </ModalBody>
        </Modal>

        <Modal
          isOpen={this.state.eligiblefailure}
          toggle={this.toggleFailure}
          className={
            "modal-md " +
            "register-popup sucess-pop" +
            " " +
            this.props.className
          }
        >
          <ModalBody>
            <div className="modal_header mb-4">
              <span>
                &nbsp;&nbsp;&nbsp;
                <img
                  src={Closebtn}
                  alt="close-icon"
                  onClick={this.closeall}
                  className="uni-icon"
                />
              </span>
            </div>
            <div className="p-5 text-center">
              <div className="mb-5 sucess-text">
                You are not eligible to apply for this program.Below are the
                details
              </div>
              <div className="mb-5 sucess-text">
                {this.state.failuremessage}.
              </div>
              <a style={{ cursor: "pointer" }} href="/#/studentprofile">
                Go to profile
              </a>
            </div>
          </ModalBody>
        </Modal>

        <ToastContainer />
        {
          selectprogram === 1 ? (
            <div className="foe-student-box foe-institute">
              <Container>
                <Row>
                  <Col xs="12" sm="12" xl="12" md="12" lg="12">
                    <div className="row col-md-12">
                      <div className="foe-about-boxx pgro-search">
                        <p className="foe-service-body">
                          Find courses in {this.state.countryname}
                        </p>

                        <div className="row w-100 mx-auto foe-program-box justify-content-center">
                          <div className="col-md-3 col-xl-3 col-md-3 col-12 foe-top-1 foe-subject">
                            <Input
                              type="text"
                              id="course_name"
                              name="course_name"
                              placeholder="Subject Area"
                              value={this.state.course_name}
                              onChange={this.handleCoursenameChange}
                            />
                            <span onClick={this.removeunicoursename1}>
                              {" "}
                              <img src={Closebtn} alt="close-icon" />
                            </span>
                            <h6 style={{ color: "red" }}>
                              {this.state.errors.course_name}
                            </h6>
                            {this.renderSuggestionsprogram()}
                          </div>

                          {/*<div className="col-md-3 col-xl-3 col-md-3 col-12 foe-top-1 foe-subject">
						<button className="btn service-btn">
						<span>Institute</span>
						</button>  
						<Input type="university_name" name="university_name" placeholder="University" onChange={this.handleUniversityChange} />  
						</div>*/}
                          {/* <div className="col-md-3 col-xl-3 col-md-3 col-12 foe-top-1 foe-subject">
                            <FormGroup>
                              <Input
                                type="select"
                                name="studentselectcountry"
                                id="studentselectcountry"
                                onChange={this.handleStudentselectcountryChange}
                                className={this.state.inputClass2}
                              >
                                <option value="Country">Country</option>
                                {this.state.country.map(
                                  (studentselectcountry) => (
                                    <option
                                      value={studentselectcountry.id}
                                      selected={
                                        localStorage
                                          .getItem("country_name")
                                          .toString() ===
                                        studentselectcountry.country_name
                                      }
                                    >
                                      {studentselectcountry.country_name}
                                    </option>
                                  )
                                )}
                              </Input>
                            </FormGroup>
                          </div> */}

                          <div className="select-bbox">
                            <select id="countryselect">
                              <option value="hide">Destination Country</option>
                              <option
                                value="1"
                                onClick={this.handleSelectcountryChange}
                              >
                                Afghanistan
                              </option>
                              <option value="2">Albania</option>
                              <option value="3">Algeria</option>
                              <option value="4">American Samoa</option>
                              <option value="5">Andorra</option>
                              <option value="6">Angola</option>
                              <option value="7">Anguilla</option>
                              <option value="8">Antarctica</option>
                              <option value="9">Antigua And Barbuda</option>
                              <option value="10">Argentina</option>
                              <option value="11">Armenia</option>
                              <option value="12">Aruba</option>
                              <option value="13">Australia</option>
                              <option value="14">Austria</option>
                              <option value="15">Azerbaijan</option>
                              <option value="16">Bahamas The</option>
                              <option value="17">Bahrain</option>
                              <option value="18">Bangladesh</option>
                              <option value="19">Barbados</option>
                              <option value="20">Belarus</option>
                              <option value="21">Belgium</option>
                              <option value="22">Belize</option>
                              <option value="23">Benin</option>
                              <option value="24">Bermuda</option>
                              <option value="25">Bhutan</option>
                              <option value="26">Bolivia</option>
                              <option value="27">Bosnia and Herzegovina</option>
                              <option value="28">Botswana</option>
                              <option value="29">Bouvet Island</option>
                              <option value="30">Brazil</option>
                              <option value="31">
                                British Indian Ocean Territory
                              </option>
                              <option value="32">Brunei</option>
                              <option value="33">Bulgaria</option>
                              <option value="34">Burkina Faso</option>
                              <option value="35">Burundi</option>
                              <option value="36">Cambodia</option>
                              <option value="37">Cameroon</option>
                              <option value="38">Canada</option>
                              <option value="39">Cape Verde</option>
                              <option value="40">Cayman Islands</option>
                              <option value="41">
                                Central African Republic
                              </option>
                              <option value="42">Chad</option>
                              <option value="43">Chile</option>
                              <option value="44">China</option>
                              <option value="45">Christmas Island</option>
                              <option value="46">
                                Cocos (Keeling) Islands
                              </option>
                              <option value="47">Colombia</option>
                              <option value="48">Comoros</option>
                              <option value="49">Republic Of The Congo</option>
                              <option value="50">
                                Democratic Republic Of The Congo
                              </option>
                              <option value="51">Cook Islands</option>
                              <option value="52">Costa Rica</option>
                              <option value="53">
                                Cote D'Ivoire (Ivory Coast)
                              </option>
                              <option value="54">Croatia (Hrvatska)</option>
                              <option value="55">Cuba</option>
                              <option value="56">Cyprus</option>
                              <option value="57">Czech Republic</option>
                              <option value="58">Denmark</option>
                              <option value="59">Djibouti</option>
                              <option value="60">Dominica</option>
                              <option value="61">Dominican Republic</option>
                              <option value="62">East Timor</option>
                              <option value="63">Ecuador</option>
                              <option value="64">Egypt</option>
                              <option value="65">El Salvador</option>
                              <option value="66">Equatorial Guinea</option>
                              <option value="67">Eritrea</option>
                              <option value="68">Estonia</option>
                              <option value="69">Ethiopia</option>
                              <option value="70">
                                External Territories of Australia
                              </option>
                              <option value="71">Falkland Islands</option>
                              <option value="72">Faroe Islands</option>
                              <option value="73">Fiji Islands</option>
                              <option value="74">Finland</option>
                              <option value="75">France</option>
                              <option value="76">French Guiana</option>
                              <option value="77">French Polynesia</option>
                              <option value="78">
                                French Southern Territories
                              </option>
                              <option value="79">Gabon</option>
                              <option value="80">Gambia The</option>
                              <option value="81">Georgia</option>
                              <option value="82">Germany</option>
                              <option value="83">Ghana</option>
                              <option value="84">Gibraltar</option>
                              <option value="85">Greece</option>
                              <option value="86">Greenland</option>
                              <option value="87">Grenada</option>
                              <option value="88">Guadeloupe</option>
                              <option value="89">Guam</option>
                              <option value="90">Guatemala</option>
                              <option value="91">Guernsey and Alderney</option>
                              <option value="92">Guinea</option>
                              <option value="93">Guinea-Bissau</option>
                              <option value="94">Guyana</option>
                              <option value="95">Haiti</option>
                              <option value="96">
                                Heard and McDonald Islands
                              </option>
                              <option value="97">Honduras</option>
                              <option value="98">Hong Kong S.A.R.</option>
                              <option value="99">Hungary</option>
                              <option value="100">Iceland</option>
                              <option value="101">India</option>
                              <option value="102">Indonesia</option>
                              <option value="103">Iran</option>
                              <option value="104">Iraq</option>
                              <option value="105">Ireland</option>
                              <option value="106">Israel</option>
                              <option value="107">Italy</option>
                              <option value="108">Jamaica</option>
                              <option value="109">Japan</option>
                              <option value="110">Jersey</option>
                              <option value="111">Jordan</option>
                              <option value="112">Kazakhstan</option>
                              <option value="113">Kenya</option>
                              <option value="114">Kiribati</option>
                              <option value="115">Korea North</option>
                              <option value="116">Korea South</option>
                              <option value="117">Kuwait</option>
                              <option value="118">Kyrgyzstan</option>
                              <option value="119">Laos</option>
                              <option value="120">Latvia</option>
                              <option value="121">Lebanon</option>
                              <option value="122">Lesotho</option>
                              <option value="123">Liberia</option>
                              <option value="124">Libya</option>
                              <option value="125">Liechtenstein</option>
                              <option value="126">Lithuania</option>
                              <option value="127">Luxembourg</option>
                              <option value="128">Macau S.A.R.</option>
                              <option value="129">Macedonia</option>
                              <option value="130">Madagascar</option>
                              <option value="131">Malawi</option>
                              <option value="132">Malaysia</option>
                              <option value="133">Maldives</option>
                              <option value="134">Mali</option>
                              <option value="135">Malta</option>
                              <option value="136">Man (Isle of)</option>
                              <option value="137">Marshall Islands</option>
                              <option value="138">Martinique</option>
                              <option value="139">Mauritania</option>
                              <option value="140">Mauritius</option>
                              <option value="141">Mayotte</option>
                              <option value="142">Mexico</option>
                              <option value="143">Micronesia</option>
                              <option value="144">Moldova</option>
                              <option value="145">Monaco</option>
                              <option value="146">Mongolia</option>
                              <option value="147">Montserrat</option>
                              <option value="148">Morocco</option>
                              <option value="149">Mozambique</option>
                              <option value="150">Myanmar</option>
                              <option value="151">Namibia</option>
                              <option value="152">Nauru</option>
                              <option value="153">Nepal</option>
                              <option value="154">Netherlands Antilles</option>
                              <option value="155">Netherlands The</option>
                              <option value="156">New Caledonia</option>
                              <option value="157">New Zealand</option>
                              <option value="158">Nicaragua</option>
                              <option value="159">Niger</option>
                              <option value="160">Nigeria</option>
                              <option value="161">Niue</option>
                              <option value="162">Norfolk Island</option>
                              <option value="163">
                                Northern Mariana Islands
                              </option>
                              <option value="164">Norway</option>
                              <option value="165">Oman</option>
                              <option value="166">Pakistan</option>
                              <option value="167">Palau</option>
                              <option value="168">
                                Palestinian Territory Occupied
                              </option>
                              <option value="169">Panama</option>
                              <option value="170">Papua new Guinea</option>
                              <option value="171">Paraguay</option>
                              <option value="172">Peru</option>
                              <option value="173">Philippines</option>
                              <option value="174">Pitcairn Island</option>
                              <option value="175">Poland</option>
                              <option value="176">Portugal</option>
                              <option value="177">Puerto Rico</option>
                              <option value="178">Qatar</option>
                              <option value="179">Reunion</option>
                              <option value="180">Romania</option>
                              <option value="181">Russia</option>
                              <option value="182">Rwanda</option>
                              <option value="183">Saint Helena</option>
                              <option value="184">Saint Kitts And Nevis</option>
                              <option value="185">Saint Lucia</option>
                              <option value="186">
                                Saint Pierre and Miquelon
                              </option>
                              <option value="187">
                                Saint Vincent And The Grenadines
                              </option>
                              <option value="188">Samoa</option>
                              <option value="189">San Marino</option>
                              <option value="190">Sao Tome and Principe</option>
                              <option value="191">Saudi Arabia</option>
                              <option value="192">Senegal</option>
                              <option value="193">Serbia</option>
                              <option value="194">Seychelles</option>
                              <option value="195">Sierra Leone</option>
                              <option value="196">Singapore</option>
                              <option value="197">Slovakia</option>
                              <option value="198">Slovenia</option>
                              <option value="199">
                                Smaller Territories of the UK
                              </option>
                              <option value="200">Solomon Islands</option>
                              <option value="201">Somalia</option>
                              <option value="202">South Africa</option>
                              <option value="203">South Georgia</option>
                              <option value="204">South Sudan</option>
                              <option value="205">Spain</option>
                              <option value="206">Sri Lanka</option>
                              <option value="207">Sudan</option>
                              <option value="208">Suriname</option>
                              <option value="209">
                                Svalbard And Jan Mayen Islands
                              </option>
                              <option value="210">Swaziland</option>
                              <option value="211">Sweden</option>
                              <option value="212">Switzerland</option>
                              <option value="213">Syria</option>
                              <option value="214">Taiwan</option>
                              <option value="215">Tajikistan</option>
                              <option value="216">Tanzania</option>
                              <option value="217">Thailand</option>
                              <option value="218">Togo</option>
                              <option value="219">Tokelau</option>
                              <option value="220">Tonga</option>
                              <option value="221">Trinidad And Tobago</option>
                              <option value="222">Tunisia</option>
                              <option value="223">Turkey</option>
                              <option value="224">Turkmenistan</option>
                              <option value="225">
                                Turks And Caicos Islands
                              </option>
                              <option value="226">Tuvalu</option>
                              <option value="227">Uganda</option>
                              <option value="228">Ukraine</option>
                              <option value="229">United Arab Emirates</option>
                              <option value="230">United Kingdom</option>
                              <option value="231">United States</option>
                              <option value="232">
                                United States Minor Outlying Islands
                              </option>
                              <option value="233">Uruguay</option>
                              <option value="234">Uzbekistan</option>
                              <option value="235">Vanuatu</option>
                              <option value="236">
                                Vatican City State (Holy See)
                              </option>
                              <option value="237">Venezuela</option>
                              <option value="238">Vietnam</option>
                              <option value="239">
                                Virgin Islands (British)
                              </option>
                              <option value="240">Virgin Islands (US)</option>
                              <option value="241">
                                Wallis And Futuna Islands
                              </option>
                              <option value="242">Western Sahara</option>
                              <option value="243">Yemen</option>
                              <option value="244">Yugoslavia</option>
                              <option value="245">Zambia</option>
                              <option value="246">Zimbabwe</option>
                            </select>
                          </div>

                          <div className="select-bbox1">
                            <select
                              id="courseselect"
                              onChange={this.handleSelectcourseChange}
                            >
                              <option value="hide">Qualification</option>
                              <option value="1">Bachelor Degree</option>
                              <option value="2">Post graduate Degree</option>
                              <option value="3">Vocational</option>
                              <option value="4">Doctorates</option>
                            </select>
                          </div>

                          {/* <div className="col-md-3 col-xl-3 col-md-3 col-12 foe-top-1 foe-subject">
                            <FormGroup>
                              <Input
                                type="select"
                                name="studentselectcourse"
                                id="studentselectcourse"
                                onChange={this.handleStudentselectcourseChange}
                              >
                                <option value="">Qualification</option>
                                {this.state.courses.map(
                                  (studentselectcourse) => (
                                    <option value={studentselectcourse.id}>
                                      {studentselectcourse.level_name}
                                    </option>
                                  )
                                )}
                              </Input>
                            </FormGroup>
                          </div>
                          */}
                          <div className="search-box-orange">
                            {/*<button className="btn service-btn">
						<span>Institute</span>
						</button>  */}
                            <Button
                              color="primary"
                              type="submit"
                              onClick={this.onSubmit.bind(this)}
                              className="search-icon float-md-right"
                            >
                              <img src={searchorange} alt="" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          ) : null
          // <div className="foe-student-box foe-institute">
          //   <Container>
          //     <Row>
          //       <Col xs="12" sm="12" xl="12" md="12" lg="12">
          //         <div className="row col-md-12 mx-auto">
          //           <div className="foe-about-boxx pgro-search">
          //             <p className="foe-service-body">Find Courses</p>
          //             <div className="row w-100">
          //               <div className="col-md-3 col-xl-3 col-md-3 col-12 foe-top-1 foe-subject">
          //                 {/*<button className="btn service-btn">
          //              <span>Institute</span>
          // </button>  */}
          //                 <Input
          //                   type="university_name"
          //                   name="university_name"
          //                   id="university_name"
          //                   value={this.state.university}
          //                   placeholder="Subject Area"
          //                   onChange={this.handleUniversityChange}
          //                 />
          //                 {this.renderSuggestionsuniversityname()}
          //               </div>
          //               <div className="col-md-3 col-xl-3 col-md-3 col-12 foe-top-1 foe-subject">
          //                 <FormGroup>
          //                   <Input
          //                     type="select"
          //                     name="selectcountry"
          //                     id="selectcountry"
          //                     onChange={this.handleSelectcountryChange}
          //                     className={this.state.inputClass2}
          //                   >
          //                     <option value="">Country</option>
          //                     {this.state.country.map((selectcountry) => (
          //                       <option value={selectcountry.id}>
          //                         {selectcountry.country_name}
          //                       </option>
          //                     ))}
          //                   </Input>
          //                 </FormGroup>
          //               </div>
          //               <div className="col-md-3 col-xl-3 col-md-3 col-12 foe-top-1 foe-subject">
          //                 <FormGroup>
          //                   <Input
          //                     type="select"
          //                     name="selectcourse"
          //                     id="selectcourse"
          //                     onChange={this.handleSelectcourseChange}
          //                   >
          //                     <option value="">Education level</option>
          //                     {this.state.courses.map((selectcourse) => (
          //                       <option value={selectcourse.id}>
          //                         {selectcourse.level_name}
          //                       </option>
          //                     ))}
          //                   </Input>
          //                 </FormGroup>
          //               </div>
          //               <div className="search-box-orange">
          //                 {/*<button className="btn service-btn">
          //              <span>Institute</span>
          // </button>  */}
          //                 <Button
          //                   type="submit"
          //                   onClick={this.onSubmit1.bind(this)}
          //                   className="search-icon float-md-right"
          //                 >
          //                   <img src={searchorange} alt="" />
          //                 </Button>
          //               </div>
          //             </div>
          //           </div>
          //         </div>
          //       </Col>
          //     </Row>
          //   </Container>
          // </div>
        }

        <div className="container-fluid institute-list px-0">
          <div className="container">
            <div className="foe-breabcrumb pt-4 pb-1">
              <Breadcrumb className="header-pref">
                <BreadcrumbItem>
                  <img src={Homeicon} alt="home-icon" className="uni-icon" />
                </BreadcrumbItem>
              </Breadcrumb>
            </div>
            <div className="menu-section bor-menu-box">
              <ul className="nav nav-tabs filter-btn float-left" id="" role="">
                <li className="nav-item mb-5 mt-2" onClick={this.toggleLarge}>
                  <a
                    className="nav-link filter font-10pt pad-2rem"
                    data-toggle="tab"
                    role="tab"
                  >
                    {" "}
                    <i class="fa fa-chevron-left" aria-hidden="true"></i>
                    &nbsp;&nbsp;FILTER{" "}
                  </a>
                </li>
              </ul>
            </div>
            <div className="select-wrapper2 px-0 d-flex col-12 justify-content-end">
              <select
                className="border-transparent show-by-drop width-150px  py-2"
                value=" SHOW BY"
              >
                <option value="2"> Show By ..</option>
              </select>
            </div>
            <div></div>

            {/* {this.state.visible != true ?
							<div >
								 <FilterStudent1 search={this.state.search} searchedValue={this.searchedValue} />


							</div>
							: null } */}

            {/* <Button onClick={this.toggleLarge} className="mr-1 signup-btn">Sign Up</Button> */}

            <Modal
              isOpen={this.state.large}
              toggle={this.toggleLarge}
              className={
                "modal-lg " +
                "register-popup student-popup-box filter-popup" +
                " " +
                this.props.className
              }
            >
              <ModalBody className="student-popup">
                <Form>
                  {/* <div>Pop up Show</div> */}
                  <FilterStudent1
                    search={this.state.search}
                    searchedValue={this.searchedValue}
                    closePanel={this.toggleLarge}
                  />
                </Form>
              </ModalBody>
            </Modal>

            <div className="col-md-12 pb-3 init-list-block float-left foe-inst-list px-0">
              <div className=" stud-init-list mb-34 ">
                {selectprogram === 1 ? (
                  <span>
                    {todos.length > 0 ? (
                      <div>
                        <div className="list-number">
                          {this.state.totalcount}{" "}
                        </div>
                        <div>{prods}</div>
                      </div>
                    ) : (
                      <div className="container">No records </div>
                    )}
                  </span>
                ) : (
                  <div className="container">
                    {universitylist.length > 0 ? (
                      <div className="row"> {universitylists}</div>
                    ) : (
                      <div>No records </div>
                    )}
                  </div>
                )}
              </div>

              {selectprogram === 1 ? (
                <div className="text-center">
                  <span id="page-numbers">{renderPageNumbers}</span>
                </div>
              ) : (
                <div className="text-center">
                  <span id="page-numbers">{renderPageNumbers1}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Institutelist;
