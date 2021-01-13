import React from "react";
import SearchTextBox from "./components/SearchTextBox";
import PrimaryButton from "./components/PrimaryButton";
import { Checkbox } from "primereact/checkbox";
import UserSelectDropdown from "./components/UserSelectDropdown";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
      contacts: [],
      selectedUsers: {},
      viewUser: {},
    };
    this.renderContacts = this.renderContacts.bind(this);
    this.renderContactInfoCard = this.renderContactInfoCard.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSelectedContact = this.handleSelectedContact.bind(this);
  }

  handleSelectedContact(e, index) {
    let selectedUsers = { ...this.state.selectedUsers };
    if (index in this.state.selectedUsers) {
      delete selectedUsers[index];
    } else {
      selectedUsers[index] = true;
    }
    this.setState({ selectedUsers });
  }

  renderContacts() {
    return this.state.contacts.length > 0
      ? this.state.contacts.map((contact, index) => (
          <div
            className="flex items-center hover:bg-gray-100 text-black p-4"
            onClick={() => {
              this.setState({ viewUser: { ...contact } });
            }}
          >
            <div className="w-12">
              <Checkbox
                onChange={(e) => {
                  this.handleSelectedContact(e, index);
                }}
                checked={index in this.state.selectedUsers}
              ></Checkbox>
            </div>
            <div className="w-4/5">
              <div className="w-full grid grid-cols-12 items-center">
                <div className="w-10 h-10 capitalize rounded-full bg-green-600 text-center text-white flex justify-center items-center">
                  {contact.firstname.charAt(0)}
                  {contact.lastname.charAt(0)}
                </div>
                <div className="col-span-11 ml-6">
                  <div className="flex flex-col items-start ml-2">
                    <div className="font-bold break-words">
                      {contact.firstname} {contact.lastname}
                    </div>
                    <div className="font-thin text-xs truncate">
                      {contact.email}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/5 font-bold truncate">{contact.company}</div>
          </div>
        ))
      : "";
  }

  renderContactInfoCard() {
    let viewUser = { ...this.state.viewUser };
    return viewUser.firstname && viewUser.lastname ? (
      <div className="bg-gray-300 p-6 lg:ml-10">
        <div className="text-center text-sm w-16 bg-white rounded-md transition duration-200 hover:bg-indigo-500 hover:text-white cursor-pointer">
          <i className="pi pi-comments" style={{ fontSize: "0.875rem" }}></i>{" "}
          Chat
        </div>
        <div className="flex flex-col items-center ">
          <div className="capitalize text-2xl w-24 h-24 rounded-full bg-green-600 text-center text-white flex justify-center items-center">
            {viewUser.firstname && viewUser.firstname.charAt(0)}
            {viewUser.lastname && viewUser.lastname.charAt(0)}
          </div>
          <div className="text-center text-black flex justify-center items-center font-bold text-lg xxl:text-2xl py-2 break-all">
            {viewUser.firstname} {viewUser.lastname}
          </div>
          <div className="mt-6">
            <div className="w-full grid grid-cols-3">
              <div>Full Name</div>
              <div className="col-span-2 break-all">
                {viewUser.firstname} {viewUser.lastname}
              </div>
            </div>
            <div className="w-full grid grid-cols-3 mt-4">
              <div>Email</div>
              <div className="col-span-2 break-all">{viewUser.email}</div>
            </div>
            <div className="w-full grid grid-cols-3 mt-4">
              <div>Phone</div>
              <div className="col-span-2 break-all">
                {viewUser.phone || "-"}
              </div>
            </div>
            <div className="w-full grid grid-cols-3 mt-4">
              <div>Company</div>
              <div className="col-span-2 break-all">{viewUser.company}</div>
            </div>
            <div className="w-full grid grid-cols-3 mt-4">
              <div>Address</div>
              <div className="col-span-2 break-all">{viewUser.address}</div>
            </div>
          </div>
        </div>
      </div>
    ) : (
      ""
    );
  }

  handleClick() {
    if (
      this.state.userInfo &&
      this.state.userInfo.firstname &&
      this.state.userInfo.lastname &&
      this.state.userInfo.email &&
      this.state.userInfo.company &&
      this.state.userInfo.address
    ) {
      let contactInfo = Object.assign({}, this.state.userInfo);
      this.setState(
        {
          contacts: [...this.state.contacts, contactInfo],
          errorMessage: "",
          displayBasic: false,
        },
        () => {
          this.setState({ userInfo: {} });
        }
      );
    } else {
      this.setState({ errorMessage: "Please Fill The Required(*) Fields" });
    }
  }
  handleFormInput(e, field) {
    this.setState({
      userInfo: { ...this.state.userInfo, [field]: e.target.value },
    });
  }
  customDropdownTemplate(option) {
    return <div className="truncate">{option.firstname}</div>;
  }

  render() {
    return (
      <div className="m-1">
        <div className="font-bold text-3xl">Expense App</div>
        <div className="w-full">
          <Card>Content</Card>
        </div>
        <div className="fixed bottom-0 right-0 m-4">
          <Button icon="pi pi-plus" label="Add" />
        </div>
      </div>
    );
  }
}

export default App;
