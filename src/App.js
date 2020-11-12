import React from "react";
import SearchTextBox from "./components/SearchTextBox";
import PrimaryButton from "./components/PrimaryButton";
import { Checkbox } from "primereact/checkbox";
import UserSelectDropdown from "./components/UserSelectDropdown";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userInfo: {}, contacts: [] };
    this.renderContacts = this.renderContacts.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  renderContacts() {
    return this.state.contacts.length > 0
      ? this.state.contacts.map((contact) => (
          <div className="flex items-center hover:bg-gray-100 text-black p-4">
            <div className="w-12">
              <Checkbox onChange={(e) => this.setState({ checked: e.checked })} checked={false}></Checkbox>
            </div>
            <div className="w-4/5">
              <div className="flex items-center">
                <div className="capitalize rounded-full w-10 h-10 bg-green-600 text-center text-white hidden xxl:flex justify-center items-center">
                  {contact.firstname.charAt(0)}
                  {contact.lastname.charAt(0)}
                </div>
                <div className="flex flex-col items-start ml-0 xxl:ml-3">
                  <div className="font-bold break-all">
                    {contact.firstname} {contact.lastname}
                  </div>
                  <div className="font-thin text-xs truncate">{contact.email}</div>
                </div>
              </div>
            </div>
            <div className="w-1/5 font-bold truncate">{contact.company}</div>
          </div>
        ))
      : "";
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
      this.setState({ contacts: [...this.state.contacts, contactInfo], errorMessage: "", displayBasic: false }, () => {
        this.setState({ userInfo: {} });
      });
    } else {
      this.setState({ errorMessage: "Please Fill The Required(*) Fields" });
    }
  }
  handleFormInput(e, field) {
    this.setState({ userInfo: { ...this.state.userInfo, [field]: e.target.value } });
  }
  customDropdownTemplate(option) {
    return <div className="truncate">{option.firstname}</div>;
  }

  render() {
    return (
      <React.Fragment>
        <Dialog
          header="Add A Contact"
          visible={this.state.displayBasic}
          className="w-2/5"
          onHide={() => {
            this.setState({ displayBasic: false });
          }}
        >
          <div className="p-fluid">
            <div className="p-field">
              <label htmlFor="firstname1">Firstname*</label>
              <InputText value={this.state.userInfo && this.state.userInfo.firstname} onChange={(e) => this.handleFormInput(e, "firstname")} id="firstname1" type="text" />
            </div>
            <div className="p-field">
              <label htmlFor="lastname1">Lastname*</label>
              <InputText value={this.state.userInfo && this.state.userInfo.lastname} onChange={(e) => this.handleFormInput(e, "lastname")} id="lastname1" type="text" />
            </div>
            <div className="p-field">
              <label htmlFor="email">Email*</label>
              <InputText value={this.state.userInfo && this.state.userInfo.email} onChange={(e) => this.handleFormInput(e, "email")} id="email" type="email" />
            </div>
            <div className="p-field">
              <label htmlFor="company">Company*</label>
              <InputText value={this.state.userInfo && this.state.userInfo.company} onChange={(e) => this.handleFormInput(e, "company")} id="company" type="text" />
            </div>
            <div className="p-field">
              <label htmlFor="company">Address*</label>
              <InputTextarea autoResize rows={5} cols={30} value={this.state.userInfo && this.state.userInfo.address} onChange={(e) => this.handleFormInput(e, "address")} />
            </div>
            <div className="p-field">
              <Button label="Add Contact" className="bg-buttonGradient" onClick={this.handleClick} />
              <div className="font-bold text-red-600 h-1 text-center">{this.state.errorMessage}</div>
            </div>
          </div>
        </Dialog>
        <nav class="font-sans bg-white text-center flex items-center justify-between overflow-hidden shadow-md mb-2 h-12 px-6">
          <i className="pi pi-search" style={{ fontSize: "21px" }}></i>

          <ul class="text-sm text-gray-700 list-none p-0 flex items-center">
            <div className="w-48">
              <UserSelectDropdown
                disabled={this.state.contacts.length === 0}
                value={this.state.selectedContact}
                options={this.state.contacts}
                itemTemplate={(value) => this.customDropdownTemplate(value)}
                panelClassName="w-48"
                panelStyle={{ width: "200px" }}
                className="border-0 placeholder-black"
                appendTo={document.body}
                optionLabel="firstname"
                onChange={(e) => {
                  this.setState({ selectedContact: e.value });
                }}
                placeholder="Select a Contact"
              />
            </div>
          </ul>
        </nav>
        <div className="bg-white h-screen pt-8 sm:px-2 xxl:px-40">
          <div className="text-2xl font-bold">Contacts</div>
          <div className="flex justify-between mt-10 mb-10">
            <div className="flex items-center">
              <div>
                <SearchTextBox />
              </div>
              <div className="ml-6">
                <PrimaryButton
                  onClick={() => {
                    this.setState({ displayBasic: true });
                  }}
                />
              </div>
            </div>
            <div>
              <UserSelectDropdown
                disabled={this.state.contacts.length === 0}
                value={this.state.selectedContact}
                options={this.state.contacts}
                panelClassName="truncate"
                optionLabel="firstname"
                onChange={(e) => {
                  this.setState({ selectedContact: e.value });
                }}
                placeholder="Select a Contact"
              />
            </div>
          </div>
          <div className="flex">
            <div style={{ minWidth: "50%" }}>
              <div className="flex flex-col">
                <div className="flex items-center bg-gray-200 text-black p-4">
                  <div className="w-12">
                    <i className="pi pi-plus"></i>
                  </div>
                  <div className="w-4/5">Basic Info</div>
                  <div className="w-1/5">Company</div>
                </div>
                {this.renderContacts()}
              </div>
            </div>
            <div className="bg-gray-300 h-40 p-8 w-full ml-4"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
