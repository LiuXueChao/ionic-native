import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';

export interface HTTPResponse {
  /**
   * The status number of the response
   */
  status: number;
  /**
   * The data that is in the response. This property usually exists when a promise returned by a request method resolves.
   */
  data?: any;
  /**
   * The headers of the response
   */
  headers: any;
  /**
   * Error response from the server. This property usually exists when a promise returned by a request method rejects.
   */
  error?: string;
}

/**
 * @name HTTP
 * @description
 * Cordova / Phonegap plugin for communicating with HTTP servers. Supports iOS and Android.
 *
 * Advantages over Javascript requests:
 * - Background threading - all requests are done in a background thread
 * - SSL Pinning
 *
 * @usage
 * ```typescript
 * import { HTTP } from '@ionic-native/http';
 *
 * constructor(private http: HTTP) { }
 *
 * ...
 *
 * this.http.get('http://ionic.io', {}, {})
 *   .then(data => {
 *
 *     console.log(data.status);
 *     console.log(data.data); // data received by server
 *     console.log(data.headers);
 *
 *   })
 *   .catch(error => {
 *
 *     console.log(error.status);
 *     console.log(error.error); // error message as string
 *     console.log(error.headers);
 *
 *   });
 *
 * ```
 * @interfaces
 * HTTPResponse
 */
@Plugin({
  pluginName: 'HTTP',
  plugin: 'cordova-plugin-advanced-http',
  pluginRef: 'cordova.plugin.http',
  repo: 'https://github.com/silkimen/cordova-plugin-advanced-http',
  platforms: ['Android', 'iOS']
})
@Injectable()
export class HTTP extends IonicNativePlugin {

  /**
   * This returns an object representing a basic HTTP Authorization header of the form.
   * @param username {string} Username
   * @param password {string} Password
   * @returns {Object} an object representing a basic HTTP Authorization header of the form {'Authorization': 'Basic base64encodedusernameandpassword'}
   */
  @Cordova({ sync: true })
  getBasicAuthHeader(username: string, password: string): { Authorization: string; } { return; }

  /**
   * This sets up all future requests to use Basic HTTP authentication with the given username and password.
   * @param username {string} Username
   * @param password {string} Password
   */
  @Cordova({ sync: true })
  useBasicAuth(username: string, password: string): void { }

  /**
   * Set a header for all future requests. Takes a header and a value.
   * @param header {string} The name of the header
   * @param value {string} The value of the header
   */
  @Cordova({ sync: true })
  setHeader(header: string, value: string): void { }

  /**
   * Set the data serializer which will be used for all future POST and PUT requests. Takes a string representing the name of the serializer.
   * @param serializer {string} The name of the serializer. Can be urlencoded or json
   */
  @Cordova({ sync: true })
  setDataSerializer(serializer: string): void { }

  /**
   * Clear all cookies
   */
  @Cordova({ sync: true })
  clearCookies(): void { }

  /**
   * Remove cookies
   * @param url {string}
   * @param cb
   */
  @Cordova({ sync: true })
  removeCookies(url: string, cb: () => void): void { }

  /**
   * Disable following redirects automatically
   * @param disable {boolean} Set to true to disable following redirects automatically
   */
  @Cordova({ sync: true })
  disableRedirect(disable: boolean): void { }

  /**
   * Set request timeout
   * @param timeout {number} The timeout in seconds. Default 60
   */
  @Cordova({ sync: true })
  setRequestTimeout(timeout: number): void { }

  /**
   * Enable or disable SSL Pinning. This defaults to false.
   *
   * To use SSL pinning you must include at least one .cer SSL certificate in your app project. You can pin to your server certificate or to one of the issuing CA certificates. For ios include your certificate in the root level of your bundle (just add the .cer file to your project/target at the root level). For android include your certificate in your project's platforms/android/assets folder. In both cases all .cer files found will be loaded automatically. If you only have a .pem certificate see this stackoverflow answer. You want to convert it to a DER encoded certificate with a .cer extension.
   *
   * As an alternative, you can store your .cer files in the www/certificates folder.
   * @param enable {boolean} Set to true to enable
   * @returns {Promise<void>} returns a promise that will resolve on success, and reject on failure
   */
  @Cordova()
  enableSSLPinning(enable: boolean): Promise<void> { return; }

  /**
   * Accept all SSL certificates. Or disabled accepting all certificates. Defaults to false.
   * @param accept {boolean} Set to true to accept
   * @returns {Promise<void>} returns a promise that will resolve on success, and reject on failure
   */
  @Cordova()
  acceptAllCerts(accept: boolean): Promise<void> { return; }

  /**
   * Make a POST request
   * @param url {string} The url to send the request to
   * @param body {Object} The body of the request
   * @param headers {Object} The headers to set for this request
   * @returns {Promise<HTTPResponse>} returns a promise that resolve on success, and reject on failure
   */
  @Cordova()
  post(url: string, body: any, headers: any): Promise<HTTPResponse> { return; }

  /**
   * Make a GET request
   * @param url {string} The url to send the request to
   * @param parameters {Object} Parameters to send with the request
   * @param headers {Object} The headers to set for this request
   * @returns {Promise<HTTPResponse>} returns a promise that resolve on success, and reject on failure
   */
  @Cordova()
  get(url: string, parameters: any, headers: any): Promise<HTTPResponse> { return; }

  /**
   * Make a PUT request
   * @param url {string} The url to send the request to
   * @param body {Object} The body of the request
   * @param headers {Object} The headers to set for this request
   * @returns {Promise<HTTPResponse>} returns a promise that resolve on success, and reject on failure
   */
  @Cordova()
  put(url: string, body: any, headers: any): Promise<HTTPResponse> { return; }

  /**
   * Make a PATCH request
   * @param url {string} The url to send the request to
   * @param body {Object} The body of the request
   * @param headers {Object} The headers to set for this request
   * @returns {Promise<HTTPResponse>} returns a promise that resolve on success, and reject on failure
   */
  @Cordova()
  patch(url: string, body: any, headers: any): Promise<HTTPResponse> { return; }

  /**
   * Make a DELETE request
   * @param url {string} The url to send the request to
   * @param parameters {Object} Parameters to send with the request
   * @param headers {Object} The headers to set for this request
   * @returns {Promise<HTTPResponse>} returns a promise that resolve on success, and reject on failure
   */
  @Cordova()
  delete(url: string, parameters: any, headers: any): Promise<HTTPResponse> { return; }

  /**
   * Make a HEAD request
   * @param url {string} The url to send the request to
   * @param parameters {Object} Parameters to send with the request
   * @param headers {Object} The headers to set for this request
   * @returns {Promise<HTTPResponse>} returns a promise that resolve on success, and reject on failure
   */
  @Cordova()
  head(url: string, parameters: any, headers: any): Promise<HTTPResponse> { return; }

  /**
   *
   * @param url {string} The url to send the request to
   * @param body {Object} The body of the request
   * @param headers {Object} The headers to set for this request
   * @param filePath {string} The local path of the file to upload
   * @param name {string} The name of the parameter to pass the file along as
   * @returns {Promise<HTTPResponse>} returns a promise that resolve on success, and reject on failure
   */
  @Cordova()
  uploadFile(url: string, body: any, headers: any, filePath: string, name: string): Promise<HTTPResponse> { return; }

  /**
   *
   * @param url {string} The url to send the request to
   * @param body {Object} The body of the request
   * @param headers {Object} The headers to set for this request
   * @param filePath {string} The path to donwload the file to, including the file name.
   * @returns {Promise<HTTPResponse>} returns a promise that resolve on success, and reject on failure
   */
  @Cordova()
  downloadFile(url: string, body: any, headers: any, filePath: string): Promise<HTTPResponse> { return; }
}
