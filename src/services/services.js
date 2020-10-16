import http from "../http-common"

//Login
const login = () => {
  return http.post("/login")
}

//Clientes
const getAllClients = () => {
  return http.get("/clients")
}

const getClient = id => {
  return http.get(`/clients/${id}`)
}

const createClient = data => {
  return http.post("/clients", data)
}

const updateClient = (id, data) => {
  return http.put(`/clients/${id}`, data)
}

const removeClient = id => {
  return http.delete(`/clients/${id}`)
}

const removeAllClients = () => {
  return http.delete(`/clients`)
}

const findBySuburb = suburb => {
  return http.get(`/clients?colonia=${suburb}`)
}

//Empleados
const getAllEmployees = () => {
  return http.get("/employees")
}

const getEmployee = id => {
  return http.get(`/employees/${id}`)
}

const createEmployee = data => {
  return http.post("/employees", data)
}

const updateEmployee = (id, data) => {
  return http.put(`/employees/${id}`, data)
}

const removeEmployee = id => {
  return http.delete(`/employees/${id}`)
}

const removeAllEmployees = () => {
  return http.delete(`/employees`)
}

const findByEmployeeName = name => {
  return http.get(`/employees?nombre=${name}`)
}

//Cobros
const getAllCharges = () => {
  return http.get("/charges")
}

const getCharge = id => {
  return http.get(`/charges/${id}`)
}

const createCharge = data => {
  return http.post("/charges", data)
}

const updateCharge = (id, data) => {
  return http.put(`/charges/${id}`, data)
}

const removeCharge = id => {
  return http.delete(`/charges/${id}`)
}

const removeAllCharges = () => {
  return http.delete(`/charges`)
}

const findByDate = date => {
  return http.get(`/charges?date=${date}`)
}

//Egresos
const getAllPayments = () => {
  return http.get("/payments")
}

const getPayment = id => {
  return http.get(`/tutorials/${id}`)
}

const createPayment = data => {
  return http.post("/payments", data)
}

const updatePayment = (id, data) => {
  return http.put(`/payments/${id}`, data)
}

const removePayment = id => {
  return http.delete(`/payments/${id}`)
}

const removeAllPayments = () => {
  return http.delete(`/payments`)
}

const findByDescription = description => {
  return http.get(`/payments?concept=${description}`)
}

export default {
  login,

  getAllClients,
  getClient,
  createClient,
  updateClient,
  removeClient,
  removeAllClients,
  findBySuburb,

  getAllEmployees,
  getEmployee,
  createEmployee,
  updateEmployee,
  removeEmployee,
  removeAllEmployees,
  findByEmployeeName,

  getAllCharges,
  getCharge,
  createCharge,
  updateCharge,
  removeCharge,
  removeAllCharges,
  findByDate,

  getAllPayments,
  getPayment,
  createPayment,
  updatePayment,
  removePayment,
  removeAllPayments,
  findByDescription,
}
