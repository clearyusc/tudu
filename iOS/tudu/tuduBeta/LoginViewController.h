//
//  LoginViewController.h
//  tuduBeta
//
//  Created by Ryan Cleary on 2/26/14.
//  Copyright (c) 2014 Jonathan Rusnak. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "AppDelegate.h"
#import "User.h"
#import "WebBackEndManager.h"

@interface LoginViewController : UIViewController
@property (nonatomic, retain) NSManagedObjectContext *managedObjectContext;
@property (strong, nonatomic) IBOutlet UIButton *signUpBtn;
@property (strong, nonatomic) IBOutlet UIButton *loginBtn;
@property (strong, nonatomic) IBOutlet UITextField *emailField;
@property (strong, nonatomic) IBOutlet UITextField *passwordField;

- (IBAction)signUpBtnPressed:(id)sender;
- (IBAction)loginBtnPressed:(id)sender;

@end
